"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  switchDark: () => void;
  switchLight: () => void;
  theme: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Try to get the initial theme from localStorage or system preferences
    try {
      const savedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null;
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      } else {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        return systemPrefersDark ? "dark" : "light";
      }
    } catch {
      return "light"; // Default to light mode if an error occurs
    }
  });

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const switchDark = () => setTheme("dark");
  const switchLight = () => setTheme("light");

  return (
    <ThemeContext.Provider value={{ switchDark, switchLight, theme }}>
      <div className={theme} key={theme} style={{ minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
