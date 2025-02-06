import React, { useState, useEffect } from 'react';
import './SplashScreen.css'; // Import file CSS untuk splash screen

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Tunda selama 3 detik
  }, []);

  if (showSplash) {
    return (
      <div id="splash-screen">
        <img src="public\logo-white.png" alt="Logo Anda" />
      </div>
    );
  } else {
    return null; // Jangan tampilkan apa pun setelah splash screen selesai
  }
}

export default SplashScreen;