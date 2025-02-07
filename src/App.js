// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RoseDay from "./pages/RoseDay";
import ProposeDay from "./pages/ProposeDay";
import ChocolateDay from "./pages/ChocolateDay";
import TeddyDay from "./pages/TeddyDay";
import PromiseDay from "./pages/PromiseDay";
import HugDay from "./pages/HugDay";
import KissDay from "./pages/KissDay";
import ValentineDay from "./pages/ValentineDay";  // Add import for ValentineDay page
import Home from "./pages/Home";  // Add import for Home page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RoseDay" element={<RoseDay />} />
        <Route path="/ProposeDay" element={<ProposeDay />} />
        <Route path="/ChocolateDay" element={<ChocolateDay />} />
        <Route path="/TeddyDay" element={<TeddyDay />} />
        <Route path="/PromiseDay" element={<PromiseDay />} />
        <Route path="/HugDay" element={<HugDay />} />
        <Route path="/KissDay" element={<KissDay />} />
        <Route path="/ValentineDay" element={<ValentineDay />} />
      </Routes>
    </Router>
  );
}

export default App;