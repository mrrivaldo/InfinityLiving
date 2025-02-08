import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./test.css";

const DynamicSwiper = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="swiper-wrapper">
      {/* Bagian Gambar (Swiper) */}
      <Swiper
        modules={[Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1.5}
        spaceBetween={20}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img src={slide.image} alt={slide.title} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bagian Deskripsi (Tetap di tempatnya) */}
      <div className="slide-description">
        <h2>{slides[activeIndex]?.title}</h2>
        <p>{slides[activeIndex]?.description}</p>
        <a href={slides[activeIndex]?.link} className="button">
          Read more
        </a>
      </div>
    </div>
  );
};

export default DynamicSwiper;
