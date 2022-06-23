import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    // Check if theme is browser theme is light or dark, set the icons and theme to match.
    // Clicking the button will toggle the theme.
    <div>
      {theme === "dark" ? (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <HiSun />
          Light Mode
        </div>
      ) : (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <HiMoon /> Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
