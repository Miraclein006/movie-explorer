import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import { getMovieDetails } from "../services/movieApi";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getMovieDetails(id);

        setMovie(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!movie) {
    return null;
  }

  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Poster";

  return (
    <main className="details-page">
      <Link to="/" className="back-button">
        ← Back to Movies
      </Link>

      <div className="details-container">
        <div className="details-poster">
          <img
            src={poster}
            alt={movie.Title}
          />
        </div>

        <div className="details-content">
          <h1>{movie.Title}</h1>

          <div className="rating">
            ⭐ {movie.imdbRating} / 10
          </div>

          <p>
            <strong>Year:</strong> {movie.Year}
          </p>

          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>

          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>

          <p>
            <strong>Director:</strong> {movie.Director}
          </p>

          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>

          <p>
            <strong>Language:</strong> {movie.Language}
          </p>

          <p>
            <strong>Released:</strong> {movie.Released}
          </p>

          <div className="plot">
            <h2>Plot</h2>

            <p>{movie.Plot}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MovieDetails;