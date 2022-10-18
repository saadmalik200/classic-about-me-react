import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Me from "./components/Me";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Me />} />
      <Route path="/me" element={<Me />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
