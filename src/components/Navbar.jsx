// images
import SiteLogo from "../assets/images/svg/siteLogo.svg?react";
//react router dom
import { Link, NavLink } from "react-router-dom";
//componnets
import ProgramsDropdown from "./ProgramsDropdown";
import SignButton from "./SignButton";
import LanguageDropdown from "./LanguageDropdown";
import Sidebar from "./Sidebar";
import { useState } from "react";

//i18
import { useTranslation } from "react-i18next";
// icons
import { FaBars } from "react-icons/fa";

import React from "react";

function Navbar() {
  let [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <nav className="container flex items-center justify-between py-[22px]">
      <Link to="/">
        <SiteLogo className="w-[200px] lg:w-[239px]" />
      </Link>
      <div className="hidden items-center gap-10 xl:flex">
        <NavLink className="nav-text" to={"/"}>
          {t("nav_home")}
        </NavLink>
        <ProgramsDropdown />
        <NavLink className="nav-text whitespace-nowrap" to={"#"}>
          {t("nav_finance_tools")}
        </NavLink>
        <NavLink className="nav-text" to={"#"}>
          {t("nav_contact")}
        </NavLink>
      </div>
      <div className="flex items-center md:gap-[34px]">
        <LanguageDropdown />
        <div className="hidden h-10 w-[1px] bg-gray-400 md:block"></div>
        <SignButton navbar="navbar">{t("nav_sign_in")}</SignButton>
        <button onClick={() => setOpen(true)} className="cursor-pointer">
          <FaBars className="h-7 w-7 text-[#686868] md:h-10 md:w-10 xl:hidden" />
        </button>
        {open && <Sidebar setOpen={setOpen} />}
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
