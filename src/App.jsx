// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import SplashScreen from "./components/SplashScreen";
import OurPurpose from "./pages/subpages-about/OurPurpose";
import Ourvalue from "./pages/subpages-about/Ourvalue";
import Supplier from "./pages/subpages-about/Supplier";
function App() {
  return (
    <>
      <SplashScreen />
      <Router>
        <Routes>
          <Route path="/" element={<OurPurpose />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<Supplier />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
