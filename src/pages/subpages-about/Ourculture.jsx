import React, { useEffect } from "react";
import Header from "../../components/Header";
import "./Ourculture.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import HeroImage from "../../components/HeroImage";

import Footer from "../../components/Footer";

function Ourculture() {
  return (
    <div>
      <Header />
      <HeroImage
        title="Our Culture"
        subtitle=""
        breadcrumb={["Homepage", "About"]}
        backgroundImage="/headerculture.jpg"
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
            and design. We are committed to reducing the environmental impact of
            construction, integrating cutting-edge technology to enhance
            andimprove the efficiency of steel manufacturing, and exploring
            smarter, more sustainable ways to build homes and communities.
          </p>

          <p>
            We are discovering new ways to build buildings, We’re already
            planning for future, Believing that growth has no limits, we empower
            our team to challenge themselves, develop new skills, and drive
            meaningful progress in our industry
          </p>

          <h2>Safety First</h2>

          <p>
            We are discovering new ways to build buildings, We’re already
            planning for future, Believing that growth has no limits, we empower
            our team to challenge themselves, develop new skills, and drive
            meaningful progress in our industry
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Ourculture;
