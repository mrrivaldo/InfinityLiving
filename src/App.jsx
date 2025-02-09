import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import SplashScreen from "./components/SplashScreen";
import OurPurpose from "./pages/subpages-about/OurPurpose";
import Ourvalue from "./pages/subpages-about/Ourvalue";
import Supplier from "./pages/subpages-about/Supplier";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set waktu delay untuk SplashScreen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Misal splash screen tampil selama 2 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            {/* <Route path="/" element={<OurPurpose />} /> */}
            {/* <Route path="/" element={<Supplier />} /> */}
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
