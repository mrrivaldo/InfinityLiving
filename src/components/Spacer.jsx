import React from "react";

const Spacer = ({ height }) => {
  const style = {
    height: height || "20px", // Default height of 20px if not provided
    width: "100%", // Full width
  };

  return <div style={style}></div>;
};

export default Spacer;
