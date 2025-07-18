import React from "react";
import HeroSlider from "./_components/HeroSlider";
import CardList from "./_components/CardList";
// import OurExpertCart from "./_components/OurExpertCart";
// import SwipperExpert from "./_components/SwipperExpert";
import Consultation from "./_components/Consultation";

import { useTranslation } from "react-i18next";
import StudentsSec from "./_components/StudentsSec";

function HomePage() {
  let { t } = useTranslation();
  return (
    <div>
      <HeroSlider />
      <CardList />
      {/* <section className="py-[70px]">
        <h2 className="font-inter mb-4 text-center text-[40px] leading-[49px] font-bold">
          {t("expert_team")}
        </h2>
        <p className="font-inter mx-auto mb-11 w-[574px] text-center text-[17px] leading-[21px] font-medium">
          {t("expert_team_desc")}
        </p>
        <SwipperExpert />
      </section> */}
      <section className="py-[70px]">
        <Consultation />
      </section>
      <section>
        <StudentsSec />
      </section>
    </div>
  );
}

export default HomePage;
