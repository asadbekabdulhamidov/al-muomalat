import React from "react";

import { useTranslation } from "react-i18next";
import ConsultationForm from "./ConsultationForm";

function Consultation() {
  const { t } = useTranslation();
  return (
    <div className="container flex flex-col rounded-[10px] xl:flex-row">
      <div className="rounded-[10px] bg-[#FAE9D3] px-[49px] py-[45px] xl:max-w-[60%]">
        <h4 className="font-inter mb-5 text-[32px] leading-[39px] font-bold text-[#D28527]">
          {t("section_title")}
        </h4>
        <p className="font-inter text-[22px] leading-[32px] font-medium text-[#D28527]">
          {t("section_description")}
        </p>
      </div>
      <div className="rounded-[10px] bg-[#F9F7F3] px-[49px] py-[45px] xl:max-w-[40%]">
        <h2 className="mb-1.5 text-[30px] leading-[30px] font-bold text-[#152032]">
          {t("form_title")}
        </h2>
        <p className="mb-7 leading-[20px] font-medium text-[#152032]">
          {t("form_description")}
        </p>
        <ConsultationForm />
      </div>
    </div>
  );
}

export default Consultation;
