# use-popcorn

## Purpose

use-popcorn is a small React demo app for searching movies, viewing details, rating them, and keeping a watched list. It was built as a learning project to explore React hooks, component composition, and interactions with a third-party API.

## Topics learned

- Building reusable React components (`MovieList`, `MovieDetails`, `StarRating`, etc.)
- Managing component state with `useState`, derived state, and `useRef`
- Performing side effects and data fetching with `useEffect`
- Creating and using custom hooks (`useMovies`, `useKey`, `useLocalStorageState`)
- Working with controlled inputs and keyboard shortcuts
- Persisting state to `localStorage` and keeping UI in sync

## Principles followed

- Small, focused components: each component has a single responsibility.
- Derived state over duplicating state: compute values from source data where possible.
- Encapsulate behavior in hooks: side effects and reusable logic live in custom hooks.
- Keep UI and data flow predictable: use controlled inputs and clear prop contracts.

## API used

This project uses the OMDb API to fetch movie data. The API key used in the app is the demo key embedded in the code. Endpoints used include:

- Search: `https://www.omdbapi.com/?apikey=<KEY>&s=<query>`
- Movie details: `https://www.omdbapi.com/?apikey=<KEY>&i=<imdbID>`

## Credits

This project follows the course and examples by Jonas Schmedtmann — many patterns and the overall exercise structure come from his teaching. Thanks to Jonas for the clear lessons and inspiration.

## Files of interest

- `src/components` — React components (UI and layout)
- `src/components/CustomHooks` — custom hooks used across the app

## License / Notes

This repo is for learning and demonstration purposes. Replace the in-repo OMDb API key with your own key for production use.
