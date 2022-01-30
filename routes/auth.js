const { Router } = require('express');
const {getLogin,postSignup,postLogin} = require('../controllers');
const router = Router();

router
    // .get('/login',getLogin)
    .post('/login',postLogin)
    .get('/signup',postSignup)
    .post('/signup',postSignup)

module.exports = router;
