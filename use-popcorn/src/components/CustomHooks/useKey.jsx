/**
 * useKey
 * Custom hook that runs `action` when a specific keyboard `key` is pressed.
 * Params:
 * - key: string code of the key to listen for (e.g. "Escape", "Enter")
 * - action: callback executed when the key is pressed
 */
import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      const callback = function (e) {
        if (e.code === key) {
          action();
        }
      };
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key],
  );
}
