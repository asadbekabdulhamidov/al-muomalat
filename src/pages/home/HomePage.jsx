import React from "react";
import HeroSlider from "./_components/HeroSlider";
import CardList from "./_components/CardList";
// import OurExpertCart from "./_components/OurExpertCart";
import SwipperExpert from "./_components/SwipperExpert";
import Consultation from "./_components/Consultation";

import { useTranslation } from "react-i18next";
import StudentsSec from "./_components/StudentsSec";
import PartnerCarousel from "./_components/PartnerCarousel";
import Media from "./_components/Media";
import Faq from "./_components/Faq";

function HomePage() {
  let { t } = useTranslation();
  return (
    <div>
      <HeroSlider />
      <CardList />
      <section className="align-center py-[70px]">
        <h2 className="font-inter mb-4 text-center text-[40px] leading-[49px] font-bold">
          {t("expert_team")}
        </h2>
        <p className="font-inter mx-auto mb-11 text-center text-[17px] leading-[21px] font-medium md:w-[574px]">
          {t("expert_team_desc")}
        </p>
        <SwipperExpert />
      </section>
      <section className="py-[70px]">
        <PartnerCarousel />
      </section>
      <section>
        <Media />
      </section>
      <section>
        <StudentsSec />
      </section>
      <section>
        <Faq />
      </section>
      <section className="py-[70px]">
        <Consultation />
      </section>
    </div>
  );
}

export default HomePage;
