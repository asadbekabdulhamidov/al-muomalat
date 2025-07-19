import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//icons
import { PiTelegramLogo } from "react-icons/pi";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";

//imgs
import expertimg from "../../../assets/images/png/expertimg.png";

function OurExpertCart({ name, description, image }) {
  let { t } = useTranslation();
  return (
    <div className="mx-auto flex max-w-[980px] items-center gap-[65px] rounded-[10px] bg-[#d2e6e4] p-9">
      <div>
        <img
          className="hidden h-[375px] w-[285px] md:block"
          src={image}
          alt="expert mezbah uddin ahmed"
          width={"235"}
          height={"375"}
        />
      </div>
      <div className="flex w-[514px] flex-col gap-9">
        <h3 className="font-inter text-[28px] leading-[34px] font-bold text-[#141B34]">
          {t(name)}
        </h3>
        <p className="text-[22px] leading-[30px] text-[#141B34]">
          {t(description)}
        </p>
        <div className="flex items-center gap-[34px]">
          <Link to={"#"}>
            <PiTelegramLogo className="h-6 w-6 text-[#141B34]" />
          </Link>
          <Link to={"#"}>
            <LuInstagram className="h-6 w-6 text-[#141B34]" />
          </Link>
          <Link to={"#"}>
            <FiFacebook className="h-6 w-6 text-[#141B34]" />
          </Link>
          <Link to={"#"}>
            <RiTwitterLine className="h-6 w-6 text-[#141B34]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurExpertCart;
