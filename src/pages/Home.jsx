import React from "react";
import Header from "../components/Header";
import Video from "../components/Video";
import "./home.css";
import News from "../components/News";
import Button from "../components/Button";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Spacer from "../components/Spacer";
function Home() {
  const newsItems = [
    {
      date: "February 06, 2025",
      title:
        "ArcelorMittal to move forward with construction of a new steel facility",
      image: "dummy.jpg",
    },
    {
      date: "February 06, 2025",
      title: "ArcelorMittal reports fourth quarter and full year 2024 results",
      image: "dummy.jpg",
    },
    {
      date: "January 28, 2025",
      title: "ArcelorMittal announces publication of its Q4 2024 results",
      image: "dummy.jpg",
    },
    {
      date: "February 06, 2025",
      title:
        "ArcelorMittal to move forward with construction of a new steel facility",
      image: "dummy.jpg",
    },
    {
      date: "February 06, 2025",
      title: "ArcelorMittal reports fourth quarter and full year 2024 results",
      image: "dummy.jpg",
    },
    {
      date: "January 28, 2025",
      title: "ArcelorMittal announces publication of its Q4 2024 results",
      image: "dummy.jpg",
    },
  ];

  return (
    <>
      <Header />
      <Video
        videoSrc="/video.mp4"
        phrases={[
          "Making Dreams Possible",
          "Powered by Imagination",
          "Built for Life",
        ]}
      />
      <section>
        <div className="card-container">
          <div className="card1">
            <h2>Speed & Efficiency</h2>
            <p>
              Our factory-produced LGS frames arrive ready to assemble, saving
              you time, labor, and headaches on-site.
            </p>

            <a id="card-link" href="">
              Read, Watch, Listen Here
            </a>
          </div>

          <div className="card2">
            <h2>Unmatched Durability & Eco-Friendly</h2>
            <p>
              Steel structures resist corrosion, pests, and extreme
              weather—providing stability you can count on for decades.
              Precision manufacturing means less waste, reduced materials, and a
              cleaner construction footprint.
            </p>

            <a id="card-link" href="">
              Read more
            </a>
          </div>

          <div className="card3">
            <h2>Versatile & Customizable</h2>
            <p>
              From modern homes to commercial complexes, our design-forward
              approach adapts to your style and needs.
            </p>

            <a id="card-link" href="">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="info-container">
          <div className="info-img">
            <img src="/panel.png" alt="" />
          </div>
          <div className="info-desc">
            <h2>Ready to Build Smarter?</h2>
            <p>
              Experience the future of construction with Infinity Living.
              Contact us today for a no-obligation quote and unlock infinite
              possibilities for your next project.
            </p>
            <Button text="Find Out More" />

            <p id="info-desc-link">Related Links</p>
            {/* <a href="">Access the analyst conference call</a> */}
          </div>
        </div>
      </section>

      <section>
        <div className="info-container-2">
          <div className="info-desc-2">
            <h2>At Infinity Living</h2>
            <p>
              we believe in building spaces that stand the test of time—quickly,
              safely, and sustainably. Our prefabricated Light Gauge Steel (LGS)
              technology streamlines the construction process, delivering
              cutting-edge quality and design flexibility.
            </p>
            <Button text="Find Out More" />
          </div>
          <div className="info-img">
            <img src="/panel22.png" alt="" />
          </div>
        </div>
      </section>

      <section className="build-section">
        {/* Bagian kiri dengan gambar (lebih dari setengah layar) */}
        <div className="build-image">
          <div className="overlay">
            <div className="build-text">
              <h1>LET'S BUILD TOGETHER</h1>
              <a href="#" className="build-button">
                VIEW CAREER OPENINGS
              </a>
            </div>
          </div>
        </div>

        {/* Card putih pada sisa ruang di kanan */}
        <div className="build-contact">
          <h3>LET’S TALK</h3>
          <h2>NEED TO REACH US?</h2>
          <a href="#" className="contact-button">
            CONTACT US
          </a>
        </div>
      </section>

      <section className="news-container">
        <News newsItems={newsItems} />
        <Button
          text="News Article"
          onClick={() => alert("Exploring More")}
          className="custom-button-news"
        />
      </section>

      {/* <section>
        <div className="report-container">
          <div className="report-info">
            <h1>
              Are you looking for a report, policy <br /> or procedure?
            </h1>
            <p>
              Please go to our corporate library to access our reports and
              policies.
            </p>
          </div>
          <div className="button-report">
            <Button text="Corporate Library" />
          </div>
        </div>
      </section> */}

      <BackToTop />
      <Footer />
    </>
  );
}

export default Home;
