import React from "react";

import { servicesData } from "../data/index.js";
import CardOur from "./CardOur.jsx";
import { useTranslation } from "react-i18next";

function CardList() {
  let { t } = useTranslation();

  return (
    <section className="container flex flex-col items-center py-[70px]">
      <p className="font-inter mb-[10px] text-center text-[40px] leading-[49px] font-bold">
        {t("our_services")}
      </p>
      <p className="mb-[62px] w-[300px] text-center text-[20px] leading-[24px] font-medium text-[#686868] md:w-[574px]">
        {t("our_services_desc")}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {servicesData &&
          servicesData.map((item) => {
            return (
              <CardOur
                key={item.id}
                icon={item.icon}
                titleKey={item.titleKey}
                descKey={item.descKey}
                bgColor={item.bgColor}
              />
            );
          })}
      </div>
    </section>
  );
}

export default React.memo(CardList);
