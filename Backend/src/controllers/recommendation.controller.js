
import { saveRecommendation } from "../models/recommendation.model.js";
import {generateMovieRecommendations} from "../services/recommendation.service.js"

export const recommendMovies = async (request, reply) => {
  const { preference } = request.body;
  if (!preference || preference.trim().length < 3) {
    return reply.code(400).send({
      message: "Valid preference is required"
    });
  }
  const recommendations = await generateMovieRecommendations(preference);
 await saveRecommendation(preference, recommendations.recommendations);
  return reply.code(200).send({
    preference,
    recommendations
  });
};
