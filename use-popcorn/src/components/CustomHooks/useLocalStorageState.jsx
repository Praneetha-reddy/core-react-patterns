/**
 * useLocalStorageState
 * Hook that syncs state with localStorage for a given `key`.
 * Returns [state, setState].
 * Params:
 * - initialState: default state when localStorage is empty
 * - key: localStorage key to use
 */
import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [watched, setWatched] = useState(function () {
    return JSON.parse(localStorage.getItem(key)) || initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(watched));
    },
    [key, watched],
  );
  return [watched, setWatched];
}
