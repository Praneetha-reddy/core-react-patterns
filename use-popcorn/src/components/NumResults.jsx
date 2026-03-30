/**
 * NumResults
 * Displays the number of movies found.
 * Props:
 * - movies: array of movie objects
 */
export default function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
