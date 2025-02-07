import React from "react";
import "./button.css"; // Import CSS

const Button = ({ text, onClick, className }) => {
  return (
    <button className={`button-fom ${className}`} onClick={onClick}>
      <span className="text">{text}</span>
    </button>
  );
};

export default Button;