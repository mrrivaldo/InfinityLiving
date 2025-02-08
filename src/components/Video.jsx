// Video.js
import React from "react";
import PropTypes from "prop-types";
import { useTypewriter } from "react-simple-typewriter";
import "./Video.css";

function Video({ videoSrc, phrases }) {
  const [text] = useTypewriter({
    words: phrases,
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="video-container">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "-175px",
          left: "0",
          width: "100%",
          height: "80%",
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
