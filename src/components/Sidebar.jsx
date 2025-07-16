import React from "react";
import { Link } from "react-router-dom";
// react icons
import { FaXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
// import compoennts
import ProgramsDropdown from "./ProgramsDropdown";
import SignButton from "./SignButton";

function Sidebar({ setOpen }) {
  let { t } = useTranslation();
  return (
    <div className="absolute top-0 right-0 bottom-0 z-50 w-full bg-white transition-all duration-500 ease-linear md:w-[50%]">
      <button onClick={() => setOpen(false)}>
        <FaXmark className="absolute right-4 h-10 w-10 text-[#686868]" />
      </button>

      <div className="mt-20 flex flex-col items-center gap-10">
        <Link to={"/"} className="nav-text">
          {t("nav_home")}
        </Link>
        <ProgramsDropdown />
        <Link to={"#"} className="nav-text">
          {t("nav_finance_tools")}
        </Link>
        <Link to={"#"} className="nav-text">
          {t("nav_contact")}
        </Link>
        <Link to={"/login"} className="font-bold text-[#009688] underline">
          {t("nav_sign_in")}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
