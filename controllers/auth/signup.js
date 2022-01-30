const createError = require('http-errors');
const { User } = require('../../models');

const postSignup = (req, res, next) => {

    const validation = User.validate(req.body);
    if (validation.error) {
        const error = new createError(validation.error.message);
        error.statusCode = 400;
        return next(error);
    }
    //check existens
    const user = new User(req.body);
    user.checkExistence()
        .then(r => {
            if (r.check) {
                const error = new createError(r.message);
                //error.statusCode = 409;
                return next(error);
            }
        })
        .catch(error => {
            return new Error(500);
        });

    user.save((error) => {

        if (error) {
            return next(new Error(500));
        }
        res.status(201).json({
            message: 'User has been successfully created'
        });
    })
};

module.exports = { postSignup };