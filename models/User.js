const { dbCon } = require('../configuration');
const createError = require('http-errors');
const {userValidator} = require('../validator');
const { message } = require('../validator/userValidator');
class User {

    constructor(userData){
        this.userData = { ...userData};
        console.log(this.userData);
    };
    save(){
        try {
            dbCon('users',async (db) =>{
                console.log('save method is called');
                await db.insertOne(this.userData); 
             });
        } catch (error) {
            console.log(error);
        }
    }
    checkExistence(){
        console.log('check existence is called');
        return new Promise((resolve,reject)=>{
            try {
                dbCon('users',async(db)=>{
                    const user = await db.findOne({'$or':[{username: this.userData['username']},
                    {email: this.userData['email']}]});
                    console.log(user);

                    if(!user){
                        resolve({
                            check : false
                        })
                    }
                    else if(this.userData['username'] === user.username){
                        resolve({
                            check : true,
                            message : 'this username is already in use'
                        })
                    }
                    else if(this.userData['email'] === user.email){
                        resolve({
                            check : true,
                            message : 'this email is already in use'
                        })
                    }
                });
            } catch (error) {
                reject(error);
            }
        })
    }
    static validate(userData){
        const result = userValidator.validate(userData);
        return result;
    };
};
const userObject = new User({
    username: 'bhupentiwari',
    email : 'bhupentiwari@live.com',
    password: 'bhupentiwari',
    first_name : 'Bhupendra',
    last_name: 'Tiwari'
});

userObject.checkExistence()
    .then(check =>{
        console.log(check);
    })
    .catch(error=>()=>{
        console.log(console.error)
    })
//user.save();

module.exports = User;

