const Joi = require("joi");

//user validation

exports.validateUsers = (user) => {
  const schema = Joi.object().keys({
    userName: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
    phoneNumber: Joi.string().required(),
  });

  return schema.validate(user);
};
