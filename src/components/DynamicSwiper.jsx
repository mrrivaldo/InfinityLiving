import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./dynamicSwiper.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Button from "./Button";

const DynamicSwiper = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="swiper-container-wrapper">
      {/* Bagian Swiper (Gambar) */}
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: false, // Pastikan tidak menggunakan dynamicBullets agar bullet tetap terlihat
        }}
        modules={[Pagination]}
        slidesPerView={1.1}
        spaceBetween={20}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay dengan delay 3 detik
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img src={slide.image} alt={slide.title} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bagian Deskripsi */}
      <div className="slide-description">
        <h2>{slides[activeIndex]?.title}</h2>
        <p>{slides[activeIndex]?.description}</p>
        <Button text={slides[activeIndex]?.buttonText || "Learn More"} />
      </div>
    </div>
  );
};

export default DynamicSwiper;
