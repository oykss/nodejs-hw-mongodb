import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string().min(10).max(15).required().messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} digits',
    'string.max': 'Phone number should have at most {#limit} digits',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().min(6).messages({
    'string.base': 'Email should be a string',
    'string.min': 'Email should have at least {#limit} characters',
  }),
  isFavourite: Joi.boolean().required().messages({
    'boolean.base': 'Favourite status should be true or false',
    'any.required': 'Favourite status is required',
  }),
  contactType: Joi.string()
    .valid('work', 'personal', 'home')
    .required()
    .messages({
      'string.base': 'Contact type should be a string',
      'any.only': 'Contact type should be one of: work, personal, home',
      'any.required': 'Contact type is required',
    }),
});
