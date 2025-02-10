import React, { useEffect } from "react";
import Header from "../../components/Header";
import "./ourvalue.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import HeroImage from "../../components/HeroImage";

function Ourvalue() {
  return (
    <div>
      <Header />
      {/* <div class="hero-section">
        <img src="public\sci.jpg" alt="Gambar Hero" />
        <div class="hero-content">
          <h1>Our value</h1>
          <p></p>
        </div>
      </div> */}
      <HeroImage
        title="Our value"
        subtitle=""
        breadcrumb={[""]}
        backgroundImage="/sci.jpg"
      />
      <section className="values-section">
        <div className="container">
          <div className="value-grid">
            <div className="value-item">
              <div className="text-content">
                {" "}
                {/* Kontainer untuk teks */}
                <h2>Safety</h2>
                <h3>Success starts with keeping all our employees safe</h3>
                <p>
                  Every accident is avoidable and every employee working at
                  ArcelorMittal - from the shop floor to the management
                  committee - must hold that belief. This is at the heart of the
                  supportive safety culture we must achieve at all operations.
                </p>
                <p>
                  Our people must be well trained and empowered to speak up
                  about safety risks and concerns. Our golden rules must be
                  rigorously implemented and followed. And our leadership should
                  be a frequent presence on the shop floor, demonstrating that
                  safety is at the core of how we think and act, always. With a
                  refusal to accept anything less, we know we can succeed.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="image-content">
                {" "}
                {/* Kontainer untuk gambar */}
                <img src="/path/to/image1.jpg" alt="Safety" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="value-grid">
            <div className="value-item">
              <div className="image-content">
                {" "}
                {/* Kontainer untuk gambar */}
                <img src="/path/to/image1.jpg" alt="Safety" />
              </div>
            </div>
            <div className="value-item">
              <div className="text-content">
                {" "}
                {/* Kontainer untuk teks */}
                <h2>Sustainability</h2>
                <h3>
                  We want to be competitive and thrive in the world of tomorrow
                </h3>
                <p>
                  This means we must have a clear view of how the world is
                  evolving, not only from an economic and market perspective,
                  but also the social and environmental mega-trends that will
                  shape our future.
                </p>
                <p>
                  Managing our business profitably through the cycle enables us
                  to invest for the long-term, pursuing the opportunities that
                  will exist for steel in an increasingly circular and
                  decarbonized world and meeting the expectations of all our
                  stakeholders. This will enable us to build the strongest
                  platform for our company as well as make an important
                  contribution to a better world for all.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="value-grid">
            <div className="value-item">
              <div className="text-content">
                {" "}
                {/* Kontainer untuk teks */}
                <h2>Quality</h2>
                <h3>Quality is essential to our competitive edge</h3>
                <p>
                  We must seek to exceed expectations in terms of our products,
                  processes and performance, combining our deep operational
                  knowledge with keen commercial acumen and a desire to innovate
                  and expand the potential of steel.{" "}
                </p>
                <p>
                  We should aspire to achieve excellence in everything we do,
                  inspiring our colleagues to develop new ideas and come out on
                  top.{" "}
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="image-content">
                {" "}
                {/* Kontainer untuk gambar */}
                <img src="/path/to/image1.jpg" alt="Safety" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="value-grid">
            <div className="value-item">
              <div className="image-content">
                {" "}
                {/* Kontainer untuk gambar */}
                <img src="/path/to/image1.jpg" alt="Safety" />
              </div>
            </div>
            <div className="value-item">
              <div className="text-content">
                {" "}
                {/* Kontainer untuk teks */}
                <h2>Leadership</h2>
                <h3>
                  We built and maintained our leadership position through
                  visionary thinking and a willingness to constantly challenge
                  the status quo and be open to doing things differently
                </h3>
                <p>
                  It is that approach that enabled us to consistently rank
                  number one with the most demanding of customers. We never
                  accept that the limits of our material have been reached and
                  continually strive to produce ever smarter steels to help
                  solve problems and build the world of tomorrow.{" "}
                </p>
                <p>
                  Within the highly competitive, complex and changing world in
                  which we operate today, this is more critical than ever. We
                  are highly motivated by the opportunities this brings to
                  re-define steel for a new generation - driving innovation,
                  pursuing new business models, creating new partnerships, and
                  embracing diversity.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="value-grid">
            <div className="value-item">
              <div className="text-content">
                {" "}
                {/* Kontainer untuk teks */}
                <h2>Curiosity</h2>
                <p>
                  We’re distinguished by our capacity to imagine and build. Our
                  innovations are powered by a deep understanding of our
                  customers and clients. We bring our capabilities and
                  experience to bear on the toughest challenges in the world.{" "}
                </p>
                <p></p>
              </div>
            </div>
            <div className="value-item">
              <div className="image-content">
                {" "}
                {/* Kontainer untuk gambar */}
                <img src="/path/to/image1.jpg" alt="Safety" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ourvalue;
