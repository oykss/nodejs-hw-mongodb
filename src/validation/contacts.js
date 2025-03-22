import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

import { contactMessages as messages } from './messages.js';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': messages.name.base,
    'string.min': messages.name.min,
    'string.max': messages.name.max,
    'any.required': messages.name.required,
  }),
  phoneNumber: Joi.string().min(10).max(15).required().messages({
    'string.base': messages.phoneNumber.base,
    'string.min': messages.phoneNumber.min,
    'string.max': messages.phoneNumber.max,
    'any.required': messages.phoneNumber.required,
  }),
  email: Joi.string().min(6).messages({
    'string.base': messages.email.base,
    'string.min': messages.email.min,
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': messages.isFavourite.base,
  }),
  contactType: Joi.string()
    .valid('work', 'personal', 'home')
    .required()
    .messages({
      'string.base': messages.contactType.base,
      'any.only': messages.contactType.only,
      'any.required': messages.contactType.required,
    }),
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message(messages.userId.invalid);
    }
    return true;
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).messages({
    'string.base': messages.name.base,
    'string.min': messages.name.min,
    'string.max': messages.name.max,
  }),
  phoneNumber: Joi.string().min(10).max(15).messages({
    'string.base': messages.phoneNumber.base,
    'string.min': messages.phoneNumber.min,
    'string.max': messages.phoneNumber.max,
  }),
  email: Joi.string().min(6).messages({
    'string.base': messages.email.base,
    'string.min': messages.email.min,
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': messages.isFavourite.base,
  }),
  contactType: Joi.string().valid('work', 'personal', 'home').messages({
    'string.base': messages.contactType.base,
    'any.only': messages.contactType.only,
  }),
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message(messages.userId.invalid);
    }
    return true;
  }),
});
