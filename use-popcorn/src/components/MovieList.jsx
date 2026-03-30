/**
 * MovieList
 * Renders a list of `Movie` items.
 * Props:
 * - movies: array of movie objects
 * - onClick: handler passed to each Movie item
 */
import Movie from "./Movie";

export default function MovieList({ movies, onClick }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onClick={onClick} />
      ))}
    </ul>
  );
}
