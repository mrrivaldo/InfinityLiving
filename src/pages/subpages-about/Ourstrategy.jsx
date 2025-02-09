import React from "react";
import HeroImage from "../../components/HeroImage";
import Footer from "../../components/Footer";
import "./Ourstrategy.css";
function Ourstrategy() {
  return (
    <div>
      <HeroImage
        title="Our purpose: Smarter<br>steels for people and<br>planet"
        subtitle=""
        breadcrumb={["Homepage", "About"]}
        backgroundImage="/black.jpg"
      />

      <section>
        <div className="strategy-container">
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
      <Footer />
    </div>
  );
}

export default Ourstrategy;
