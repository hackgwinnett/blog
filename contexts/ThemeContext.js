import React, { createContext, useEffect, useState } from "react";

const getInitialTheme = (_) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("hg-color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    // const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    // if (userMedia.matches) {
    //   document.documentElement.dataset.theme = "forest";
    //   return "dark";
    // }
  }

  return "light";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      document.documentElement.dataset.theme = isDark ? "forest" : "garden";
    }

    localStorage.setItem("hg-color-theme", theme);
  };

  useEffect(
    () => {
      rawSetTheme(theme);
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
