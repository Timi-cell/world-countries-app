import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PageNotFound from "./components/404Page";
import Country from "./components/Country";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/countries/:code" element={<Country />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
