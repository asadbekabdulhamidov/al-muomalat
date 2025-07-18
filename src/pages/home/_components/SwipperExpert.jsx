import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//data
import { expertData } from "../data";
import OurExpertCart from "./OurExpertCart";

function SwipperExpert() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <Swiper
        slidesPerView={1.2} // 1 ta slayd + keyingidan biroz qismi ko‘rinadi
        spaceBetween={20} // 1000 EMAS! 20–30 yaxshi
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="!overflow-visible"
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
      >
        {expertData.map(({ id, name, description, image }) => (
          <SwiperSlide key={id}>
            <OurExpertCart
              name={name}
              description={description}
              image={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwipperExpert;
