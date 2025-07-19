import React from "react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { useTranslation } from "react-i18next";
import MediaCartsList from "./MediaCartsList";

function Media() {
  let { t } = useTranslation();
  return (
    <div className="align-center">
      <h2 className="mb-4 text-center text-[40px] leading-[49px] font-bold">
        {" "}
        {t("media")}
      </h2>
      <p className="md:maw-w-[574px] mb-[60px] text-center text-[17px] leading-[21px] font-medium text-[#686868]">
        {t("expert_team_desc")}
      </p>
      <div className="mb-4 flex justify-center lg:justify-between">
        <p className="text-center text-[35px] leading-[43px] font-medium">
          {t("media_showcase")}
        </p>
        <div className="hidden gap-4 lg:flex">
          <button className="group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#ECF3F6] hover:bg-[#009688]">
            <FaArrowLeft className="group-hover:text-white" />
          </button>
          <button className="group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#ECF3F6] hover:bg-[#009688]">
            <FaArrowRight className="group-hover:text-white" />
          </button>
        </div>
      </div>
      <MediaCartsList />
    </div>
  );
}

export default Media;
