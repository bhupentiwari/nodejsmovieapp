const { dbCon } = require('../configuration');
const createError = require('http-errors');
const {userValidator} = require('../validator');
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
    static validate(userData){
        const result = userValidator.validate(userData);
        console.log(result);
    };
};
const user = {
    username: 'bhupentiwari',
    email : 'bhupentiwari@live.com',
    password: 'bhupentiwari',
    first_name : 'Bhupendra',
    last_name: 'Tiwari'
};

User.validate(user);
//user.save();

