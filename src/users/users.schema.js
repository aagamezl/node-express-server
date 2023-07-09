import Joi from 'joi'

export const schema = Joi.object({
  first_name: Joi.string()
    .min(1)
    .max(30)
    .required(),

  last_name: Joi.string()
    .min(1)
    .max(30)
    .required(),

  gender: Joi.string().valid('Female', 'Male'),

  email: Joi.string().email()
}).unknown(false)