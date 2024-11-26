"use client";
import React, { createContext, useState, useEffect } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  switchDark: () => void;
  switchLight: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  const switchDark = () => {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  };

  const switchLight = () => {
    setTheme("light");
    localStorage.setItem("theme", "light");
  };

  return (
    <ThemeContext.Provider value={{ switchDark, switchLight, theme }}>
      <div className={theme} key={theme} style={{ minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
