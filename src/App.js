import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
       <Routes>
          <Route index element={<Home />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="*" element={<NoPage />} />
       </Routes>
    </div>
  );
}

export default App;