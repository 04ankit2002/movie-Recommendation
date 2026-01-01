import Fastify from "fastify";
import dotenv from "dotenv"
import cors from "@fastify/cors";
import { errorHandler } from "./services/errorHandler.service.js";
import { recommendationRoutes } from "./routes/recommendation.route.js";
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";
import fastifyStatic from "@fastify/static";

const app = new Fastify({
    logger:true
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
await app.register(cors, {
  origin: "https://movie-recommendation-mukl.onrender.com", 
  methods: ["GET", "POST"]
});
const PORT = process.env.PORT || 3000;

app.register(fastifyStatic, {
  root: path.join(__dirname, "../../Frontend/dist"),
  prefix: "/",
});


app.register(recommendationRoutes, { prefix: '/movies' });
app.setErrorHandler(errorHandler);
app.setNotFoundHandler((req, reply) => {
  reply.sendFile("index.html");
});
app.listen({ port: PORT, host: "0.0.0.0" }, () => {
  console.log(`Server running on port ${PORT}`);
});


