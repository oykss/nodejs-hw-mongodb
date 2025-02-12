import dotenv from 'dotenv';

dotenv.config();

export function getEnvVar(name, defaultValue) {
  let value = process.env[name];

  value ??= defaultValue;

  if (value) return value;

  throw new Error(`Missing: process.env['${name}'].`);
}
