import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import pino from 'pino-http';

import { UPLOAD_DIR } from './constants/index.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

import router from './routers/index.js';

import { getEnvVar } from './utils/getEnvVar.js';

const PORT = +getEnvVar('PORT', 3000);

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(cookieParser());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    })
  );

  app.use('/uploads', express.static(UPLOAD_DIR));

  app.use(router);

  app.use('*', notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
