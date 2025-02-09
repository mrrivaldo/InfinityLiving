import React, { useEffect } from "react";
import Header from "../../components/Header";
import "./Ourculture.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import HeroImage from "../../components/HeroImage";

function Ourculture() {
  return (
    <div>
      <Header />
      <HeroImage
        title="Our Culture"
        subtitle=""
        breadcrumb={["Homepage", "About"]}
        backgroundImage="/sci.jpg"
      />

      <section class="article-section">
        <div class="article-content">
          <h2>Our Vision & Commitment</h2>

          <p>
            We are driven by an entrepreneurial spirit and a passion for
            excellence. We reward boldness, value curiosity and see the
            opportunities in challenges. Never content to stand still, we are on
            a journey that aims to push the boundaries of possibility in our
            industry. We are redefining the future of steel-framed
            construction—pushing the boundaries of efficiency, sustainability,
            and design.
          </p>

          <p>
            We are committed to reducing the environmental impact of
            construction, integrating cutting-edge technology to enhance and
            improve the efficiency of steel manufacturing, and exploring
            smarter, more sustainable ways to build homes and communities.
          </p>

          <p>
            We are discovering new ways to build buildings. We’re already
            planning for the future, believing that growth has no limits. We
            empower our team to challenge themselves, develop new skills, and
            drive meaningful progress in our industry.
          </p>

          <h2>Safety First</h2>

          <p>
            Wherever we are in the world, safety comes first. Building and
            maintaining a safety-first culture is a daily commitment and one
            that relies on the full engagement of our leadership and workforce.
            Rigorous safety procedures, combined with thorough training and a
            culture of shared vigilance where people are encouraged to speak up
            are in place across our operations. We have further to go on our
            journey to zero, but there is no more important result in the
            company than our safety performance.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Ourculture;
