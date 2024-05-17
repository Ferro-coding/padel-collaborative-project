import About from "./components/About";
import Blog from "./components/Blog";
import Donation from "./components/Donation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import React, { useEffect, useState} from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="*" element={<Hero />} />

        </Routes>
      </BrowserRouter>

      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default App;
