import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Bestiary from "./Pages/Bestiary";
import SkillTree from "./Pages/Skilltree";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bestiary" element={<Bestiary />} />
        <Route path="skilltree" element={<SkillTree />} />
      </Routes>
    </>
  );
}

export default App;
