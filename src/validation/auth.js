import Joi from 'joi';

import { EMAIL_REGEX } from '../constants/index.js';

import { authMessages as messages } from './messages.js';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': messages.name.base,
    'string.min': messages.name.min,
    'string.max': messages.name.max,
    'any.required': messages.name.required,
  }),
  email: Joi.string().email().min(6).pattern(EMAIL_REGEX).required().messages({
    'string.base': messages.email.base,
    'string.email': messages.email.email,
    'string.pattern.base': messages.email.pattern,
    'string.min': messages.email.min,
    'any.required': messages.email.required,
  }),
  password: Joi.string().min(6).max(30).required().messages({
    'string.base': messages.password.base,
    'string.min': messages.password.min,
    'string.max': messages.password.max,
    'any.required': messages.password.required,
  }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().min(6).pattern(EMAIL_REGEX).required().messages({
    'string.base': messages.email.base,
    'string.email': messages.email.email,
    'string.pattern.base': messages.email.pattern,
    'string.min': messages.email.min,
    'any.required': messages.email.required,
  }),
  password: Joi.string().min(6).max(30).required().messages({
    'string.base': messages.password.base,
    'string.min': messages.password.min,
    'string.max': messages.password.max,
    'any.required': messages.password.required,
  }),
});

export const requestResetEmailSchema = Joi.object({
  email: Joi.string().email().min(6).pattern(EMAIL_REGEX).required().messages({
    'string.base': messages.email.base,
    'string.email': messages.email.email,
    'string.pattern.base': messages.email.pattern,
    'string.min': messages.email.min,
    'any.required': messages.email.required,
  }),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(6).max(30).required().messages({
    'string.base': messages.password.base,
    'string.min': messages.password.min,
    'string.max': messages.password.max,
    'any.required': messages.password.required,
  }),
  token: Joi.string().required(),
});
