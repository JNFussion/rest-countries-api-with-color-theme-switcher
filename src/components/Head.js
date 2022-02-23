import React from "react";
import ToggleTheme from "./toggleTheme";

function Head(params) {
  return (
    <header className="sticky px-20 py-5 shadow-lg bg-white dark:bg-gunmetal">
      <div className="max-w-[1440px] mx-auto flex justify-between">
        <h1 className="text-xl font-extrabold text-eerie-black dark:text-white">
          Where in the world?
        </h1>
        <ToggleTheme />
      </div>
    </header>
  );
}

export default Head;
