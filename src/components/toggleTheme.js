import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

function toggle(setter) {
  document.body.classList.toggle("dark");
  setter((prevState) => !prevState);
}

function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      type="button"
      onClick={() => toggle(setIsDark)}
      className="flex items-center gap-4 text-eerie-black dark:text-white"
    >
      <span>{isDark ? <MdWbSunny /> : <FaMoon />}</span>
      <span>{isDark ? "Light" : "Dark"} mode</span>
    </button>
  );
}

export default ToggleTheme;
