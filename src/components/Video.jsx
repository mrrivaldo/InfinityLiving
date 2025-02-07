import React, { useState, useEffect, useRef } from 'react';
import './Video.css';
import { useTypewriter} from 'react-simple-typewriter';

function Video() {
  const sentences = ['Making Dreams Possible', 'Powered by Imagination', 'Built for Life'];
  
  const [text] = useTypewriter({
    words: sentences,
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

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
        <h1 className="fade-to-right">{text}</h1>
      </div>
    </div>
  );
}

export default Video;
