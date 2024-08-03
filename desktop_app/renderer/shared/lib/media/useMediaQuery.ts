import { useEffect, useState } from "react";

/**
 * @param query - The media query to track.
 * @returns The current state of the media query (true if the query matches, false otherwise).
 * @public
 */
export const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false; // 혹은 적절한 기본값으로 설정
  };

  const [matches, setMatches] = useState<boolean>(() => {
    return getMatches(query);
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQueryList.addListener(listener);
    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, [query]);

  return matches;
};
