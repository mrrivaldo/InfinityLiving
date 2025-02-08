import React from "react";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage";
import "./ourPurpose.css";

import DynamicSwiper from "../../components/DynamicSwiper";

import Footer from "../../components/Footer";

import Spacer from "../../components/Spacer";
function OurPurpose() {
  const slidesData = [
    {
      image: "public/dummy.jpg",
      title: "Judul Konten 1",
      description: "Deskripsi konten 1 di sini.",
      link: "/media",
    },
    {
      image: "public/dummy2.jpg",
      title: "Judul Konten 2",
      description: "Deskripsi konten 2 di sini.",
      link: "/media",
    },
    {
      image: "public/dummy.jpg",
      title: "Judul Konten 3",
      description: "Deskripsi konten 3 di sini.",
      link: "/media",
    },
    {
      image: "public/dummy.jpg",
      title: "",
      description: "",
      link: "",
    },
  ];
  return (
    <>
      <Header />
      <HeroImage
        title="Our purpose: Smarter<br>steels for people and<br>planet"
        subtitle=""
        breadcrumb={["Homepage", "About"]}
        backgroundImage="/black.jpg"
      />
      <section>
        <div className="purpose-container">
          <h2>
            The purpose of Infinity Living is ‘Smarter steels for people and
            planet’
          </h2>
          <p>
            We are living in an age of remarkable progress, where invention and
            human ingenuity are driving unprecedented advances in global
            development.
          </p>
          <p>
            Technology has a critical role in this transformation, but so do the
            materials that build our world. As the world's leading light gauge
            steel and building company, we have an inherent stake in this and a
            clear responsibility.
          </p>
          <p>
            Steel is as relevant as ever to the future success of our world. As
            one of the only materials to be completely reusable and recyclable,
            it will play a critical role in building the circular economy of the
            future. Steel will continue to evolve, becoming smarter, and
            increasingly sustainable.
          </p>
          <p>
            At Infinity Living, our goal is to help build a better world with
            smarter steels. Steels made using innovative processes which are
            more efficient, use less energy, and emit significantly less carbon.
            Steels that are cleaner, stronger and reusable. Steels for smart
            homes and renewable energy infrastructure that will support
            societies as they transform through this century.
          </p>
          <p>
            We foster this culture of innovation by putting research and
            development at the heart of our operations. We have some of the best
            and brightest people in the business - engineers who work for us
            because they get to tackle the most complex of problems.
          </p>
          <p>
            With a ready workforce of approximately 300 employees, we are more
            than just a company, we are a community. We are driven by an
            entrepreneurial spirit and a passion for excellence, never accepting
            that the limits of our material have been reached. We will continue
            to push boundaries, whether developing technologies to reduce the
            carbon footprint of steel, transforming the built environment with
            our new construction solutions, 3D printing parts using steel
            powders or, through the adoption of artificial intelligence and
            advanced automation across our operations. This is what it takes to
            be the steel company of the future.
          </p>
        </div>
      </section>

      {/* <DynamicSwiper /> */}
      <DynamicSwiper slides={slidesData} />
      <Spacer height="60px" />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default OurPurpose;
