/**
 * Movie
 * Renders a single movie item for lists.
 * Props:
 * - movie: object containing movie details (from OMDB API)
 * - onClick: function called with (imdbID, Title) when the item is clicked
 */
export default function Movie({ movie, onClick }) {
  return (
    <li key={movie.imdbID} onClick={() => onClick(movie.imdbID, movie.Title)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
