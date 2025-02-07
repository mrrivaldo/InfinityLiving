// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import SplashScreen from './components/SplashScreen';

function App() {
  return (
    <>
    <SplashScreen/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
    </>
  );
}


export default App
