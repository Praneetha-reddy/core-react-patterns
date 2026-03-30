/**
 * useMovies
 * Hook to fetch movies from the OMDB API for a given search `query`.
 * Returns an object: { movies, isLoading, error }.
 */
import { useEffect, useState } from "react";

const KEY = "e264c861";

export function useMovies(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        setError("");
        setIsLoading(true);
        try {
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal },
          );
          //When network connection drops
          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies.");
          }

          const data = await res.json();
          //When movie is not FOUND.
          if (data.Response === "False") {
            throw new Error("Movie Not Found");
          }

          setMovies(data.Search || []);
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length === 0) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
      return () => {
        controller.abort();
      };
    },
    [query],
  );
  return { movies, isLoading, error };
}
