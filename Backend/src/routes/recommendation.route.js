import { recommendMovies } from "../controllers/recommendation.controller.js";

export const recommendationRoutes = async (fastify) => {
  fastify.post("/recommend", {
    schema: {
      body: {
        type: "object",
        required: ["preference"],
        properties: {
          preference: { type: "string", minLength: 3 }
        }
      }
    },
    handler: recommendMovies
  });
};
