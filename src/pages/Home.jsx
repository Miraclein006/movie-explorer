import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import CategoryFilter from "../components/CategoryFilter";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import { searchMovies } from "../services/movieApi";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (query) => {
    try {
      setLoading(true);
      setError("");

      const results = await searchMovies(query);

      setMovies(results);
    } catch (err) {
      setMovies([]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  const handleCategory = (category) => {
    fetchMovies(category);
  };

  return (
    <main className="home">
      <section className="hero">
        <h1>🎬 Movie Explorer</h1>

        <p>
          Search and explore your favorite movies
        </p>

        <SearchBar onSearch={fetchMovies} />
      </section>

      <CategoryFilter onSelect={handleCategory} />

      {loading && <Loader />}

      {error && !loading && (
        <ErrorMessage message={error} />
      )}

      {!loading && !error && movies.length > 0 && (
        <section className="movies-section">
          <h2>Movies</h2>

          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default Home;