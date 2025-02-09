import React from "react";
import "./ourGrid.css";

const OurGrid = ({ data }) => {
  return (
    <div className="our-grid">
      {data.map((item, index) => (
        <div
          key={index}
          className={`grid-item ${item.type} ${item.className || ""}`}
        >
          {item.type === "image" ? (
            <img src={item.src} alt={item.alt} />
          ) : (
            <>
              {item.subtitle && <h3>{item.subtitle}</h3>}
              {item.title && <h2>{item.title}</h2>}
              {item.number && <h1>{item.number}</h1>}
              {item.description && <p>{item.description}</p>}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default OurGrid;
