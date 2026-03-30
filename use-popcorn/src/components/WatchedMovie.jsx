/**
 * WatchedMovie
 * Renders a watched movie entry with stats and a delete action.
 * Props:
 * - movie: watched movie object {imdbID, poster, title, imdbRating, userRating, runtime}
 * - onDelete: function(imdbID) called when the delete button is clicked
 */
export default function WatchedMovie({ movie, onDelete }) {
  const { imdbID, poster, title, imdbRating, userRating, runtime } = movie;
  return (
    <li key={imdbID}>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <button className="btn-delete" onClick={() => onDelete(imdbID)}>
        X
      </button>
      <div>
        <p>
          <span>⭐️</span>
          <span>{imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime}</span>
        </p>
      </div>
    </li>
  );
}
