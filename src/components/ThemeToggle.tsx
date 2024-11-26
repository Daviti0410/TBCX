"use client";

import { ThemeContext } from "../app/[locale]/context/ThemeContext";
import { useContext } from "react";

export default function ThemeToggle() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { switchDark, switchLight, theme } = context;

  const toggleTheme = (): void => {
    if (theme === "light") {
      switchDark();
    } else {
      switchLight();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
    >
      {theme === "light" ? "🌙" : "☀️"} Mode
    </button>
  );
}
