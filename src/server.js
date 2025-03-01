import cors from "cors";
import express from "express";
import pino from "pino-http";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import contactsRouter from "./routers/contacts.js";
import { getEnvVar } from "./utils/getEnvVar.js";

const PORT = +getEnvVar("PORT", 3000);

export const setupServer = () => {
  const app = express();

  app.use(express.json({ type: ["application/json"], limit: "10kb" }));
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );

  app.use(contactsRouter);

  app.use("*", notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
