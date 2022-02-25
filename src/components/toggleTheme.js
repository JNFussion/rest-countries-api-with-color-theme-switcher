import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

function toggle() {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  }
}

function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center lg:gap-4 gap-2 text-eerie-black dark:text-white"
    >
      <span>{isDark ? <MdWbSunny /> : <FaMoon />}</span>
      <span>{isDark ? "Light" : "Dark"} mode</span>
    </button>
  );
}

export default ToggleTheme;
