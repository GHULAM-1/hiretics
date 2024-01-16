"use client";
import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaQueryList.addListener(handler);

    // Initial check
    setMatches(mediaQueryList.matches);

    // Cleanup
    return () => {
      mediaQueryList.removeListener(handler);
    };
  }, [query]);

  return matches;
}
