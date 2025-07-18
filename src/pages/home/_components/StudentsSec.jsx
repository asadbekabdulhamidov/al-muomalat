import React from "react";
import { useTranslation } from "react-i18next";
import StudentCart from "./StudentCart";

const StudentsSec = () => {
  let { t } = useTranslation();
  return (
    <div className="align-center py-[70px]">
      <div className="mb-[60px] text-center">
        <h2 className="font-inter mb-4 text-[40px] leading-[49px] font-bold">
          {t("what_students_say")}
        </h2>
        <p className="text-[17px] leading-[21px] font-medium text-[#686868]">
          {t("what_students_say")}
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-5">
        <StudentCart />
        <StudentCart />
        <StudentCart />
      </div>
    </div>
  );
};

export default StudentsSec;
