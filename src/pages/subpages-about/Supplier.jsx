import React, { useEffect } from "react";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage";
import "./Supplier.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function Supplier() {
  return (
    <div>
      <Header />
      <HeroImage
        title="Supplier"
        subtitle=""
        breadcrumb={["Homepage", "About"]}
        backgroundImage="/headersupp.jpeg"
      />

      <section class="article-section">
        <div class="article-content">
          <p>
            <h2>Doing Business with Infinity Living</h2>

            <p>
              Building strong relationships is the cornerstone of our success.
              At Infinity Living, we place particular value in our supplier
              partnerships. Thanks to the help of a diverse range of suppliers
              and advisors, we are able to serve our clients, shareholders,
              communities and employees more efficiently. The quality of our
              supplier relationships has a direct impact on our competitive
              position. Our suppliers' products and services affect the quality
              of our own products and services. As such, we seek to work with
              those suppliers who provide the best combination of price, quality
              and capability to meet our needs.
            </p>

            <p>
              We are committed to holding ourselves and our supplier community
              to the highest standards of business conduct and integrity. We
              have a zero tolerance policy for breaches of ethics and expect our
              suppliers to adhere to the strict guidelines of our{" "}
              <a href="https://jpprivatebk.com/supplier-code-of-conduct.htm">
                supplier code of conduct
              </a>
              .
            </p>

            <p>
              Building and maintaining a competitive franchise requires
              innovation, teamwork and continuous improvement. Our supplier
              selection process is stringent and allows us to use only suppliers
              that meet our specific needs. We actively manage our suppliers and
              monitor their ongoing performance to promote and build the best
              possible relationship between our firms. We seek to enhance the
              Infinity Living team through establishing relationships with a
              diverse range of suppliers who share our goals and values.
            </p>

            <p>
              <a href="https://jpprivatebk.com/supplier-registration-events.htm">
                Register now to become a Infinity Living supplier
              </a>
            </p>

            <h2>Our commitment to Supplier Diversity</h2>

            <p>
              At Infinity Living we are committed to cultivating business
              relationships with firms owned and operated by locals, minorities,
              women and other historically underutilized groups. We're
              challenging the way business is done by demonstrating market
              leadership in Supplier Diversity.
            </p>

            <p>
              Since 2024, we've spent over $1.5 Million with diverse suppliers.
              We believe that by helping to build a strong and vibrant business
              community that is reflective of all segments of society, we create
              mutual gain with the communities we serve.
            </p>

            <p>
              <a href="https://jpprivatebk.com/supplier-diversity.htm">
                Register now or learn more about supplier diversity
              </a>
            </p>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Supplier;
