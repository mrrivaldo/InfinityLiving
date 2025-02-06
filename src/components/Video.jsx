import React, { useState, useEffect, useRef } from 'react';
import './Video.css';

function Video() {
  const sentences = ['Making Dreams Possible', 'Powered by Imagination', 'Built for Life'];

  const [currentSentence, setCurrentSentence] = useState(sentences[0]);
  const currentIndex = useRef(0); // Menggunakan useRef untuk melacak index

  useEffect(() => {
    const intervalId = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % sentences.length;
      setCurrentSentence(sentences[currentIndex.current]);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [sentences]); // Hanya sentences sebagai dependency

  return (
    <div className="video-container">
      <video
        src="public/video.mp4"
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '-175px',
          left: '0',
          width: '100%',
          height: '80%',
          objectFit: 'cover',
          filter: 'brightness(60%)', // Filter kecerahan langsung pada video
        }}
      />
      <div className="video-overlay">
        <h1>{currentSentence}</h1>
        <p></p>
      </div>
    </div>
  );
}

export default Video;
