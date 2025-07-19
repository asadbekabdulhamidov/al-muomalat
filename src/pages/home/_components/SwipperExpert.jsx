import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // 👈 modules import qilingan
// import "swiper/css";
// import "swiper/css/pagination";

// data va komponent
import { expertData } from "../data";
import OurExpertCart from "./OurExpertCart";

function SwipperExpert() {
  return (
    <div className="">
      <Swiper
        modules={[Autoplay, Pagination]} // 👈 modules qo‘shildi
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // 👈 autoplay qo‘shildi
        pagination={{ clickable: true }}
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
