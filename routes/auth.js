const { Router } = require('express');
const {getLogin} = require('../controllers');
const router = Router();

router
    .get('/login',getLogin)
    .post('/login',(req,res,next)=>{

    })
    .get('/signup',(req,res,next)=>{

    })
    .post('/signup',(req,res,next)=>{

    })

module.exports = router;
