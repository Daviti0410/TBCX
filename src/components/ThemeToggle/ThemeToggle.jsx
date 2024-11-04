"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function ThemeToggle() {
  const { switchDark, switchLight, theme } = useContext(ThemeContext);

  const toggleTheme = () => {
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
