import { groq } from "../config/ai.js";

export const generateMovieRecommendations = async (preference) => {
  const prompt = `
Suggest 5 movies based on this preference:
"${preference}"

Return ONLY valid JSON in this format:
{
  "recommendations": ["Movie 1", "Movie 2", "Movie 3"]
}
`;

  const completion = await groq.chat.completions.create({
    model: "openai/gpt-oss-20b",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new Error("Empty AI response");
  }

  return safeJsonParse(content);
};

const safeJsonParse = (text) => {
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON returned by AI");
  }
};
