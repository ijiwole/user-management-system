import Joi from "joi";

export const userSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(32).pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$")).required()
    .messages({
      "string.pattern.base": "Password must contain at least one uppercase letter, one lowercase letter, and one digit."
    }),
});
