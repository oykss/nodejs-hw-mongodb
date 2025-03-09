import express from 'express';

export const jsonParser = express.json({
  type: ['application/json'],
  limit: '10kb',
});
