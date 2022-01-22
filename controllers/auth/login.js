const logger = require('../../configuration/logger');

module.exports.getLogin = (req,res,next)=>{
    logger.info('Hello I am from logger');
    res.send('Welcome to login page getlogin method');
    
};