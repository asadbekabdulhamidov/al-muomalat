import React from "react";
import Slider from "react-slick";
import americanExpress from "../../../assets/images/png/americanExpress.png";
import amazon from "../../../assets/images/png/amazon.png";
import klara from "../../../assets/images/png/klara.png";
import skrill from "../../../assets/images/png/skrill.png";
import stipe from "../../../assets/images/png/stipe.png";
import wester from "../../../assets/images/png/wester.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PartnerCarousel() {
  // 👉 Carousel sozlamalari
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 6.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    rows: 1, // 2 qator
    slidesPerRow: 1,
  };

  // 🧩 Har bir logoni massivda saqlaymiz
  const logos = [
    americanExpress,
    amazon,
    klara,
    skrill,
    stipe,
    wester,
    americanExpress,
    amazon,
    klara,
    skrill,
    stipe,
    wester,
  ];
  const logos2 = [
    americanExpress,
    amazon,
    klara,
    skrill,
    stipe,
    wester,
    americanExpress,
    amazon,
    klara,
    skrill,
    stipe,
    wester,
  ];

  return (
    <div className="bg-white py-10">
      <h2 className="mb-[60px] text-center text-[40px] leading-[49px] font-bold">
        Our Partners and Clients
      </h2>

      <Slider {...settings}>
        {/* 🔁 Massivdagi har bir logoni chiqaramiz */}
        {logos.map((logo, index) => {
          return (
            <div key={index} className="mr-2">
              <img src={logo} alt={`partner-${index}`} className="" />
            </div>
          );
        })}
      </Slider>
      <Slider {...settings}>
        {/* 🔁 Massivdagi har bir logoni chiqaramiz */}
        {logos2.map((logo, index) => {
          return (
            <div key={index} className="">
              <img src={logo} alt={`partner-${index}`} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PartnerCarousel;
