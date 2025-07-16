import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Hero from "./Hero";

import React from "react";

function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full"
    >
      <SwiperSlide>
        <Hero />
      </SwiperSlide>
      <SwiperSlide>
        <Hero />
      </SwiperSlide>
    </Swiper>
  );
}

export default React.memo(HeroSlider);
