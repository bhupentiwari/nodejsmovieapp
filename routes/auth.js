const { Router } = require('express');
const router = Router();

router
    .get('/login',(req,res,next)=>{
        res.send('Welcome to login page');
    })
    .post('/login',(req,res,next)=>{

    })
    .get('/signup',(req,res,next)=>{

    })
    .post('/signup',(req,res,next)=>{

    })

module.exports = router;
