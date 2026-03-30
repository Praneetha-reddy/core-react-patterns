/**
 * MovieDetails
 * Fetches and displays detailed information about a single movie.
 * Props:
 * - id: imdbID of the movie to fetch
 * - onClose: function to close the details view
 * - onAddWatched: callback to add a movie to the watched list
 * - watched: array of watched movies (used to detect existing userRating)
 *
 * Notes: performs a fetch side-effect and updates document title.
 */
import { useState, useEffect, useRef } from "react";
import StarRating from "./StarRating";
import { useKey } from "./CustomHooks/useKey";

export default function MovieDetails({ id, onClose, onAddWatched, watched }) {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const count = useRef(0);

  const movieRating = watched.find((movie) => movie.imdbID === id)?.userRating;

  const {
    Title: title,
    Poster: poster,
    imdbRating,
    imdbID,
    Runtime: runtime,
  } = movieDetails;

  /*SHOULD NOT DO THIS */
  //   const [isTop, setIsTop] = useState(imdbRating > 8);
  //   console.log(`imdb rating: `, imdbRating);
  //   console.log(isTop);
  // instead use derived state
  //   const isTop = imdbRating > 8;
  //   console.log(isTop);

  useEffect(
    function () {
      async function fetchMovieDetails() {
        setIsLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=e264c861&i=${id}`,
        );
        const data = await response.json();
        setIsLoading(false);
        setMovieDetails(data);
      }
      fetchMovieDetails();
    },
    [id],
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `MOVIE | ${title}`;
      return () => {
        document.title = `usePopcorn`;
      };
    },
    [title],
  );

  useKey("Escape", onClose);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID,
      title,
      poster,
      imdbRating,
      runtime: runtime === "N/A" ? 0 : Number(runtime.split(" ")[0]),
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onClose(movieDetails.imdbID);
  }

  function handleRating(rating) {
    setUserRating(rating);
    count.current++;
  }

  if (isLoading) {
    return <p className="loader">Loading...</p>;
  }
  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={() => onClose()}>
          &larr;
        </button>
        <img alt="Movie poster" src={movieDetails?.Poster}></img>
        <div className="details-overview">
          <h2>{movieDetails?.Title}</h2>
          <p>
            {movieDetails?.Released} &bull; {movieDetails?.Runtime}
          </p>
          <p>{movieDetails?.Genre}</p>
          <p>{movieDetails?.imdbRating} IMDb rating</p>
        </div>
      </header>
      <section>
        <div className="rating">
          {movieRating && <p>This movie has been rated with {movieRating}</p>}
          {!movieRating && (
            <>
              <StarRating
                maxRating={10}
                size="20"
                onSetRating={handleRating}
              ></StarRating>
              {userRating !== 0 && (
                <button className="btn-add" onClick={handleAdd}>
                  +Add to List
                </button>
              )}
            </>
          )}
        </div>
        <p>{movieDetails?.Plot}</p>
        <p>Starring {movieDetails?.Actors}</p>
        <p>Directed by {movieDetails?.Director}</p>
      </section>
    </div>
  );
}
