import React, { useState } from "react";
import parse from "react-html-parser"; // Import react-html-parser
import "./FAQ.css";

const FAQ = ({ title, data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {title && <h2 className="faq-title">{title}</h2>}
      <div className="faq-list">
        {data.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{parse(item.answer)}</div> // Parse HTML string
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
