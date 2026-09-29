import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Poster";

  return (
    <div className="movie-card">
      <img
        src={poster}
        alt={movie.Title}
        className="movie-poster"
      />

      <div className="movie-content">
        <h3>{movie.Title}</h3>

        <p className="movie-year">
          📅 {movie.Year}
        </p>

        <Link
          to={`/movie/${movie.imdbID}`}
          className="details-button"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;