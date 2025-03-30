import path from 'node:path';

import { ContactsCollection } from '../db/models/contacts.js';

// Sorting options
export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

// Email service configuration
export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
};

// Cloud storage configuration
export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUD_NAME',
  API_KEY: 'API_KEY',
  API_SECRET: 'API_SECRET',
};

// File system paths
export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');
export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

// Swagger
export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');

// Contact model related constants
export const CONTACT_KEYS = Object.keys(ContactsCollection.schema.paths);
export const CONTACT_TYPES =
  ContactsCollection.schema.path('contactType').enumValues;

// Validation patterns
export const EMAIL_REGEX = /@/;

// Time constants
export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;
