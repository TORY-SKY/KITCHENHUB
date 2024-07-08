import React from "react";
import { Swiper, SwiperSlide, Navigation, Pagination } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="swiper-container">
      <h1>swiper</h1> {/* Main container class */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30} // Optional: Spacing between slides
        slidesPerView={1} // Optional: Number of slides visible (adjust for responsiveness)
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        {/* Add more slides as needed */}
        <h1>hello world</h1>
      </Swiper>
    </div>
  );
};

export default Slider;
