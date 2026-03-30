/**
 * WatchedMovieList
 * Renders a list of watched movies.
 * Props:
 * - watched: array of watched movie objects
 * - onDelete: function(imdbID) to remove a watched movie
 */
import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({ watched, onDelete }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} onDelete={onDelete} />
      ))}
    </ul>
  );
}
