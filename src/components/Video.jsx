import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useTypewriter } from "react-simple-typewriter";
import "./Video.css";

function Video({ videoSrc, phrases }) {
  const videoRef = useRef(null);

  const [text] = useTypewriter({
    words: phrases,
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Ensure autoplay works
      video.play().catch((error) => {
        console.error("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "-175px",
          left: "0",
          width: "100%",
          height: "90%",
          objectFit: "cover",
          filter: "brightness(60%)",
        }}
      />
      <div className="video-overlay">
        <h1 className="fade-to-right">{text}</h1>
      </div>
    </div>
  );
}

Video.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Video;
