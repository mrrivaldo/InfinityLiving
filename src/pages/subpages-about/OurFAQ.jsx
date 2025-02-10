import React from "react";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage";
import Footer from "../../components/Footer";
import BackToTop from "../../components/BackToTop";
import FAQ from "../../components/FAQ";

function OurFAQ() {
  const faqData = [
    {
      question:
        "How many countries does ArcelorMittal operate in and how many people do you employ?",
      answer: `ArcelorMittal operates in multiple countries. Learn more on our official website: 
                <a href="https://corporate.arcelormittal.com" target="_blank" rel="noopener noreferrer">Visit ArcelorMittal</a>.`,
    },
    {
      question: "How much steel do you produce each year?",
      answer:
        "We produce around <strong>70-80 million metric tons</strong> of steel annually.",
    },
    {
      question: "What is the scope of your mining operations?",
      answer: `We have mining operations worldwide. See the full report here: 
                <a href="https://corporate.arcelormittal.com/sustainability" target="_blank" rel="noopener noreferrer">Sustainability Report</a>.`,
    },
    {
      question: "How do you make steel and what is it used for?",
      answer:
        "Steel is made through the reduction of iron ore. It is used in <em>transportation, buildings, and infrastructure</em>.",
    },
  ];
  return (
    <div>
      <Header />
      <HeroImage
        title="Frequently Asked Questions"
        subtitle=""
        breadcrumb={["Homepage", "About"]}
        backgroundImage="/sci.jpg"
      />
      <FAQ title="Infinity Living" data={faqData} />
      <FAQ title="Infinity Living" data={faqData} />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default OurFAQ;
