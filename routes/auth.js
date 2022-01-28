const { Router } = require('express');
const {getLogin,postSignup} = require('../controllers');
const router = Router();

router
    .get('/login',getLogin)
    .post('/login',(req,res,next)=>{

    })
    .get('/signup',postSignup)
    .post('/signup',postSignup)

module.exports = router;
