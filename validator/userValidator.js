const Joi = require('@hapi/joi');

const schema = Joi.object({
    username: Joi.string().alphanum().required().min(3).max(8),
    email : Joi.string().email().required,
    password: Joi.string().pattern(
        new RegExp(`^\S+@\S+$`)
    ).required(),
    first_name: Joi.string().required(),
    last_name : Joi.string().required()
});

module.exports = schema;