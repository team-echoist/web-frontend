'use client'
import { useCallback, useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const onChangeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") { 
  //     if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //       setTheme("dark");
  //     } else {
  //       setTheme("light");
  //     }
  //   }
  // }, []);

  return {
    theme,
    onChangeTheme,
  };
}