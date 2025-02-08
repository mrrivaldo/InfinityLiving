// HeroImage.js
import React from "react";
import PropTypes from "prop-types";
import "./heroImage.css";

function HeroImage({ title, subtitle, breadcrumb, backgroundImage }) {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="hero-container" style={heroStyle}>
      <nav className="breadcrumb">
        {breadcrumb.map((item, index) => (
          <span key={index}>
            {item} {index < breadcrumb.length - 1 && " / "}
          </span>
        ))}
      </nav>
      <div className="hero-text">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

HeroImage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  breadcrumb: PropTypes.arrayOf(PropTypes.string).isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default HeroImage;
