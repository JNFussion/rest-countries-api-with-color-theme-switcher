import React from "react";
import ToggleTheme from "./toggleTheme";

function Head() {
  return (
    <header className="sticky lg:px-20 px-5 py-5 shadow-lg bg-white dark:bg-gunmetal">
      <div className="max-w-[1440px] mx-auto flex justify-between">
        <h1 className="text-lg lg:text-xl font-extrabold text-eerie-black dark:text-white">
          Where in the world?
        </h1>
        <ToggleTheme />
      </div>
    </header>
  );
}

export default Head;
