/**
 * Search
 * Controlled search input for filtering movies.
 * Props:
 * - query: current search string
 * - setQuery: function to update the query
 *
 * Uses `useKey` to focus the input when the Enter key is pressed.
 */
import { useRef } from "react";
import { useKey } from "./CustomHooks/useKey";

export default function Search({ query, setQuery }) {
  const searchRef = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === searchRef.current) return;
    searchRef.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={searchRef}
    />
  );
}
