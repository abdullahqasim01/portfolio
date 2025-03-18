

import { useState, useEffect } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [hydrated, setHydrated] = useState(false); // To track hydration

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const darkMode =
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDark(darkMode);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      document.documentElement.classList[isDark ? "add" : "remove"]("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark, hydrated]);

  return { isDark, setIsDark };
}
