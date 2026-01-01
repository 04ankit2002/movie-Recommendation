import db from "../config/db.js";

export const saveRecommendation = (userInput, movies) => {
  const stmt = db.prepare(`
    INSERT INTO recommendations (user_input, recommended_movies)
    VALUES (?, ?)
  `);

  stmt.run(userInput, JSON.stringify(movies));
};
