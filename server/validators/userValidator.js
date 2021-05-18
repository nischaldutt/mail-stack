const joi = require("joi");
const createError = require("http-errors");

module.exports.validateUserRegister = (user) => {
  const schema = joi.object().keys({
    userEmail: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "in"] } }),
  });

  return new Promise((resolve, reject) => {
    const validationResult = schema.validate(user);
    validationResult.error
      ? reject(createError(400, "Invalid email format"))
      : resolve({ message: "User input validated" });
  });
};
