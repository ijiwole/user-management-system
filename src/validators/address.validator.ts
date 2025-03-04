import Joi from "joi";

export const createAddressSchema = Joi.object({
  street: Joi.string().min(3).max(100).required(),
  city: Joi.string().min(2).max(50).required(),
  state: Joi.string().min(2).max(50).required(),
  zip_code: Joi.string().pattern(/^\d{5}(-\d{4})?$/).required()
    .messages({
      "string.pattern.base": "Zip code must be in the format 12345 or 12345-6789."
    }),
  country: Joi.string().min(2).max(50).required(),
});

export const updateAddressSchema = Joi.object({
  street: Joi.string().min(3).max(100),
  city: Joi.string().min(2).max(50),
  state: Joi.string().min(2).max(50),
  zip_code: Joi.string().pattern(/^\d{5}(-\d{4})?$/)
    .messages({
      "string.pattern.base": "Zip code must be in the format 12345 or 12345-6789."
    }),
  country: Joi.string().min(2).max(50),
}).min(1);
