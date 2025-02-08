import React, { useEffect } from "react";
import Header from "../components/Header";
import "./about.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import DynamicSwiper from "../components/DynamicSwiper";
import HeroImage from "../components/HeroImage";

function About() {
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
    <div>
      <Header />
      {/* <div class="hero-section">
        <img src="public\heroour.jpg" alt="Gambar Hero" />
        <div class="hero-content">
          <h1>
            Smarter steels for <br></br>people and planet
          </h1>
        </div>
      </div> */}
      <HeroImage
        title="Smarter steels for people<br>and planet"
        subtitle=""
        breadcrumb={["Homepage", ""]}
        backgroundImage="/sci.jpg"
      />

      <section class="article-section">
        <div class="article-content">
          <p>
            We are living in an era of transformative innovation, where human
            ingenuity and cutting-edge technology are redefining how we design
            and construct homes. At the forefront of this revolution, steel
            frame homes are setting a new benchmark in modern living—delivering
            strength, sustainability, and adaptability for the future.
          </p>

          <p>
            Steel is the foundation of sustainable construction, and its
            complete recyclability makes it one of the most environmentally
            friendly materials available. By integrating light gauge steel
            technology into homebuilding, we are shaping a new era of circular
            economy housing, where homes are designed to be stronger, more
            efficient, and endlessly recyclable.
          </p>

          <p>
            At our core, we believe in building smarter. Steel frame homes
            provide innovative solutions that focus on energy efficiency,
            durability, and reduced carbon footprints. By harnessing
            precision-engineered steel, we deliver homes that are not only
            modern and resilient but also faster and more cost-effective to
            build. With fewer resources required for construction and
            maintenance, these homes align with global sustainability goals
            while maintaining exceptional quality.
          </p>

          <p>
            Our mission is supported by continuous research and development into
            steel frame technology and its applications in housing. We
            prioritize customer needs, leveraging advanced engineering and
            design to create customizable, flexible living spaces that adapt to
            evolving lifestyles. With lighter materials, faster construction
            times, and superior strength, steel frame homes represent the future
            of residential architecture.
          </p>

          <p>
            With a dedicated team of experts, designers, and builders, we aim to
            bring smarter living to communities worldwide. Steel frame homes
            redefine what it means to live sustainably, providing a blueprint
            for homes that are built to last, built to inspire, and built for a
            greener tomorrow.
          </p>
        </div>
      </section>

      <div class="grid-container">
        <div class="grid-item">
          <p>Steel Manufacturing in</p>
          <p class="grid-number">3</p>
          <p>countries</p>
        </div>
        <div class="grid-item">
          <p>Customers in</p>
          <p class="grid-number">36</p>
          <p>countries</p>
        </div>
        <div class="grid-item">
          <p>As of December 31, 2023</p>
          <p class="grid-number">56</p>
          <p>Skiled Workforce</p>
        </div>

        <div class="grid-item">
          <p>Production capacity 2025</p>
          <p class="grid-number">66000</p>
          <p></p>
        </div>
        <div class="grid-item">
          <p>Ligh guage steel produced in 2025</p>
          <p class="grid-number">18</p>
          <p></p>
        </div>
        <div class="grid-item">
          <p>Steel shipments totalled in 2025</p>
          <p class="grid-number">0</p>
          <p>million tonnes</p>
        </div>

        <div class="grid-item">
          <p>Designs centres</p>
          <p class="grid-number">3</p>
          <p></p>
        </div>
        <div class="grid-item">
          <p>Engineers and designers</p>
          <p class="grid-number">300</p>
          <p></p>
        </div>
        <div class="grid-item">
          <p>R&D Programs</p>
          <p class="grid-number">11</p>
          <p>in progress</p>
        </div>

        <div class="grid-item">
          <p>Patended steel Framing Solutions</p>
          <p class="grid-number">30</p>
          <p></p>
        </div>
        <div class="grid-item">
          <p>Thriving communities</p>
          <p class="grid-number">61</p>
          <p></p>
        </div>
        <div class="grid-item">
          <p>New products and solutions launched in 2025</p>
          <p class="grid-number">8</p>
          <p></p>
        </div>
      </div>

      {/* <DynamicSwiper /> */}
      <DynamicSwiper slides={slidesData} />
    </div>
  );
}

export default About;
