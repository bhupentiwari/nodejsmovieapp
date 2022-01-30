const {User} = require('../../models');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { result } = require('@hapi/joi/lib/base');
const {readFileSync} = require('fs');
const postLogin = (req,res,next)=>{
    console.log('post login is called');
    console.log(User);
    User.login(req.body)
        .then(r =>{
            if(r instanceof Error){
               return  next(r);
            }
            const secret = readFileSync('./private.key');
            const token = jwt.sign({_id:result._id,username:result.username},secret);

            res.json({token});
        })
        .catch(err =>{

        });
};

module.exports = {
    postLogin
}