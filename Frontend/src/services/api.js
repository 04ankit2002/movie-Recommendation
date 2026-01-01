const baseUrl = "https://movie-recommendation-mukl.onrender.com/"

export const getMovieRecommendations = async (preference) => {
  const response = await fetch(`${baseUrl}/movies/recommend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ preference })
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recommendations");
  }
  return response.json();
};
