const { dbCon } = require('../configuration');
const createError = require('http-errors');
const { userValidator,userLoginValidator } = require('../validator');
const { hashSync,compareSync}  = require('bcryptjs');
class User {

    constructor(userData) {
        this.userData = { ...userData };
    };
    save(cb) {
        dbCon('users', async (db) => {
            try {
                const hashedPassword = hashSync(this.userData['password'],12);
                this.userData['password'] = hashedPassword;
                //console.log(this.userData);
                await db.insertOne(this.userData);
                cb();
            } catch (error) {
                cb(error);
            }
        });
    }
    checkExistence() {
        return new Promise((resolve, reject) => {
            try {
                dbCon('users', async (db) => {
                    const user = await db.findOne({
                        '$or': [{ username: this.userData['username'] },
                        { email: this.userData['email'] }]
                    });
                    if (!user) {
                        resolve({
                            check: false
                        })
                    }
                    else if (this.userData['username'] === user.username) {
                        resolve({
                            check: true,
                            message: 'this username is already in use'
                        })
                    }
                    else if (this.userData['email'] === user.email) {
                        resolve({
                            check: true,
                            message: 'this email is already in use'
                        })
                    }
                });
            } catch (error) {
                reject(error);
            }
        })
    }
    static validate(userData) {
        const result = userValidator.validate(userData);
        return result;
    };
    static login(userData){
        console.log(userData);
        return new Promise((resolve,reject)=>{
        //Validation block
        const validation = userLoginValidator.validate(userData);
        if(validation.error){
            const error = new Error(validation.error.message);
            error.statusCode = 400;
            return resolve(error);
        }

        dbCon('users',async(db) =>{
            try {
            //find user
            const user = await db.findOne({'$or':[{username : userData['username']},
            {password: userData['password']}]},{projection:{username: 1,password: 1}});
            //console.log(user);
            console.log
            if(!user || !compareSync(userData['password'],user.password)){
                const error = new Error('Please enter valid username and password');
                error.statusCode = 404;
                return resolve(error);
            }
            resolve(user);
            //const check = compareSync(userData['password'],user.password);

            } catch (err) {
                reject(err);
            }
        })
        })
    }
};


// User.login({
//     username: 'bhup',
//     password : 'bhsb'
// })
// .then(res =>{
//     console.log(res);
// });

module.exports = User;

