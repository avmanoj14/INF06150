import { useState, useEffect } from "react";

import "../../main.css";
import "../theme/Theme.css";

function Theme() {
  const [theme, setTheme] = useState("light");
  const [themeHeader, setThemeHeader] = useState("header-light");
  const [themeFooter, setThemeFooter] = useState("footer-light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const toggleHeaderTheme = () => {
    if (themeHeader === "header-light") {
      setThemeHeader("header-dark");
    } else {
      setThemeHeader("header-light");
    }
  };

  const toggleFooterTheme = () => {
    if (themeFooter === "footer-light") {
      setThemeFooter("footer-dark");
    } else {
      setThemeFooter("footer-light");
    }
  };

  const toggleThemes = () => {
    toggleTheme();
    toggleHeaderTheme();
    toggleFooterTheme();
  };

  useEffect(() => {
    document.documentElement.className = theme;
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const headerElement = document.querySelector(".header");
    if (headerElement) {
      headerElement.classList.remove("header-light", "header-dark");
      headerElement.classList.add(themeHeader);
    }
  }, [themeHeader]);

  useEffect(() => {
    const footerElement = document.querySelector(".footer");
    if (footerElement) {
      footerElement.classList.remove("footer-light", "footer-dark");
      footerElement.classList.add(themeFooter);
    }
  }, [themeFooter]);

  return (
    <div className={`App`}>
      <label className="switch">
        <input type="checkbox" onClick={toggleThemes} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
export default Theme;
