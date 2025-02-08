import React from "react";
import "./footer.css";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";

import Button from "./Button";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="subscribe">
          <h3>Subscribe</h3>
          <Button text="Sign up for alerts →" />

          <p className="copyright">©2025 Infinity Living</p>
        </div>
        <div className="links">
          <a href="#">Corporate library</a>
          <a href="#">Contact us</a>
          <a href="#">Suppliers</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Accessibility</a>
          <a href="#">UK Modern Slavery Act</a>
        </div>
        <div className="logos">
          {/* <img src="/path-to-paris-2024-logo.png" alt="Paris 2024 Olympics" />
          <img
            src="/path-to-paralympics-logo.png"
            alt="Paris 2024 Paralympics"
          /> */}
        </div>
        <div className="social-icons">
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
          <FaSpotify />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
