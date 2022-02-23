import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from "./components/Head";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
