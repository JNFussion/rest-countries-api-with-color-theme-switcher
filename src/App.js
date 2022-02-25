import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Head from "./components/Head";
import Home from "./components/Home";

function App() {
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
