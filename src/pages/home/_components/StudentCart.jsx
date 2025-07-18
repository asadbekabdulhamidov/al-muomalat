import React from "react";
import { useTranslation } from "react-i18next";
import studentAvatar from "../../../assets/images/png/studenAvatar.png";

function StudentCart() {
  let { t } = useTranslation();
  return (
    <div className="max-w-[366px] p-[35px] shadow-lg">
      <p className="mb-5 text-[17px] leading-[26px] font-medium text-[#686868]">
        {t("testimonial_text")}
      </p>
      <div className="flex gap-4">
        <img src={studentAvatar} alt="avatar" />
        <div>
          <p className="font-inter text-[18px] leading-[26px] font-medium text-black">
            {t("testimonial_name")}
          </p>
          <span className="text-[12px] leading-[26px] text-[#686868]">
            {t("testimonial_position")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StudentCart;
