import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//icons
import {
  PiTelegramLogo,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
} from "react-icons/pi";
import { FiFacebook } from "react-icons/fi";

function OurExpertCart() {
  let { t } = useTranslation();
  return (
    <div className="flex items-center gap-[65px] p-9">
      <div>img</div>
      <div className="flex flex-col gap-9">
        <h3 className="font-inter text-[28px] leading-[34px] font-bold text-[#141B34]">
          {t("expert_name")}
        </h3>
        <p>{t("expert_description")}</p>
        <div className="flex items-center gap-[34px]">
          <Link to={"#"}>
            <PiTelegramLogo />
          </Link>
          <Link to={"#"}>
            <PiInstagramLogoLight />
          </Link>
          <Link to={"#"}>
            <FiFacebook />
          </Link>
          <Link to={"#"}>
            <PiTwitterLogoLight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurExpertCart;
