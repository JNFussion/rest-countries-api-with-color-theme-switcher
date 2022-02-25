import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Head from "./components/Head";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    const listener = () => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    window.addEventListener("load", listener);

    return () => {
      window.removeEventListener("load", listener);
    };
  }, []);

  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:country" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
