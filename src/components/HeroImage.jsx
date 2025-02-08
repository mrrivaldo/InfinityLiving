import React from "react";
import PropTypes from "prop-types";
import "./heroImage.css";

function HeroImage({ title, subtitle, breadcrumb, backgroundImage }) {
  return (
    <div className="hero-container">
      {/* Gambar dengan filter */}
      <img src={backgroundImage} alt="Hero Background" className="hero-image" />

      <div className="hero-left">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          {breadcrumb.map((item, index) => (
            <span key={index}>
              {item} {index < breadcrumb.length - 1 && " / "}
            </span>
          ))}
        </nav>

        {/* Teks di atas gambar */}
        <div className="hero-text">
          <h1 className="hero-title">
            {title.split("<br>").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <p className="hero-subtitle">{subtitle}</p>
        </div>
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
