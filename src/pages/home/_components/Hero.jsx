//i18
import { useTranslation } from "react-i18next";
import React from "react";
//images
import HeroAvatars from "../../../assets/images/svg/heroAvavtars.svg?react";
import AsisttendStudent from "../../../assets/images/svg/asistendStudent.svg?react";

import HeroImg from "../../../assets/images/png/heroImg.png";

function Hero() {
  let { t } = useTranslation();
  return (
    <section className="relative flex h-[90vh] items-center bg-[#009688] md:h-[65vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[85vh]">
      <div className="container flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col gap-10">
          <p className="font-inter w-[300px] rounded-[10px] bg-[white] px-[25px] py-[10px] text-[17px] leading-[21px] font-medium text-[#252641] md:w-[421px]">
            {t("welcome_tag")}
          </p>
          <h1 className="font-inter w-[300px] text-[30px] leading-[40px] font-bold text-white md:w-[723px] md:text-[40px] md:leading-[55px] lg:text-[58px] lg:leading-[70px]">
            {t("welcome_title")}
          </h1>

          <div className="flex flex-col items-start md:flex-row md:items-center">
            <button className="font-inter relative rounded-[10px] bg-[#FD661F] px-12 py-5 text-[16px] leading-[19px] font-medium whitespace-nowrap text-white md:px-8">
              {t("students_opinion")}
            </button>
            <HeroAvatars className="relative top-[-10px] md:top-0 md:right-[30px]" />
          </div>
        </div>
        <div className="hidden xl:block">
          <img src={HeroImg} alt="student boy  hero img " />
        </div>
        <div className="flex items-center gap-6 rounded-[20px] bg-white px-5 py-[18.75px] opacity-80 lg:flex xl:absolute xl:top-10 xl:left-[50%]">
          <AsisttendStudent />
          <div>
            <p className="font-inter text-[24px] leading-[100%] font-bold text-[#5959595]">
              {t("assizted_250")}
            </p>
            <p className="font-inter text-[14px] leading-[100%] font-semibold">
              {t("assisted_students")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hero);
