import {  useState } from "react";
import { getMovieRecommendations } from "../services/api";

const MovieForm = () => {
  const [preference, setPreference] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!preference.trim()) return;

    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const data = await getMovieRecommendations(preference);
       setMovies(data.recommendations.recommendations);
    } catch {
      setError("AI service is busy. Try again later.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6">
        
        {/* Header */}
        <h1 className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          CineMind AI
        </h1>
        <p className="text-sm text-slate-400 mt-1 mb-5">
          AI-powered movie recommendations
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Describe your movie mood..."
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-linear-to-r from-purple-500 to-pink-500 py-3 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-50 shadow-lg"
          >
            {loading ? "Thinking..." : "Get Recommendations"}
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        )}

        {/* Results */}
        {movies.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold text-slate-300 mb-3">
              🎥 Recommended for you
            </h2>

            <ul className="space-y-2">
              {movies.map((movie, index) => (
                <li
                  key={index}
                  className="rounded-lg bg-black/40 border border-white/5 px-4 py-2 text-sm hover:bg-black/60 transition"
                >
                  {movie}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieForm;
