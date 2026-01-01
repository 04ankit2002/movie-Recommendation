import Fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";
import { errorHandler } from "./services/errorHandler.service.js";
import { recommendationRoutes } from "./routes/recommendation.route.js";

dotenv.config();

const app = Fastify({ logger: true });

const start = async () => {
  await app.register(cors, {
    origin: true,
    methods: ["GET", "POST"],
  });

  app.register(recommendationRoutes, { prefix: "/movies" });
  app.setErrorHandler(errorHandler);

  const PORT = process.env.PORT || 3000;
  await app.listen({ port: PORT, host: "0.0.0.0" });

  console.log(`🚀 Server running on port ${PORT}`);
};

start();
