const express = require('express');
const { logger } = require('./configuration/logger')
const createError = require('http-errors');

const middleware = require('./middleware');
const routes = require('./routes');
const app = express();

process.on('unhandledRejection', (reason) => {
    logger.error(reason);
    process.exit(1);
});

middleware(app);
routes(app);

app.use((req, res, next) => {
    const error = createError(404);
    next(error);
    //console.log(error);
    //res.status(error.statusCode).send(error.message);
})

app.use((error,req,res,next)=>{
    //res.statusCode = error.statusCode;
    res.json({
        message: error.message
    });
});

module.exports = app;