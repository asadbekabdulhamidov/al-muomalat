import React from "react";
// imgs
import SiteLogo from "../assets/images/svg/siteLogo.svg?react";
//compoennts
import ProgramsDropdown from "./ProgramsDropdown";

//i18
import { useTranslation } from "react-i18next";

//rrd
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#009688]">
      <div className="align-center py-11">
        <div className="flex flex-col items-center gap-6 border-b-[2px] border-b-white pb-15">
          <Link to={"/"} className="rounded-3xl bg-white px-6 py-4">
            <SiteLogo />
          </Link>
          <h2 className="text-3xl font-bold text-white">Asadbek Dev</h2>
          <div className="flex items-center gap-10">
            <Link className="text-white" to="/">
              {t("nav_home")}
            </Link>
            <ProgramsDropdown footer={true} />
            <Link className="text-white" to="#">
              {t("nav_finance_tools")}
            </Link>
            <Link className="text-white" to="#">
              {t("nav_contact")}
            </Link>
          </div>
        </div>
        <div className="pt-11 text-center text-white">
          Copyright Satyam Studio
        </div>
      </div>
    </div>
  );
}

export default Footer;
