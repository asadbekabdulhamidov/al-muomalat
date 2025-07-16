import React from "react";
import { useTranslation } from "react-i18next";

const ProgramsDropdown = ({ footer }) => {
  const { t } = useTranslation();

  const textClass = footer ? "foot-text" : "nav-text";

  return (
    <div className="group relative">
      {/* Trigger */}
      <button
        className={`${textClass} group-hover:text-primary flex items-center gap-1 transition`}
      >
        {t("nav_programs")}
        <svg
          className="h-4 w-4 transform transition-transform group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div className="absolute top-full left-0 z-50 mt-2 hidden w-64 rounded border bg-white shadow-md group-hover:block">
        <ul className="divide-y divide-gray-200 text-sm text-gray-800">
          <li
            className={`nav-text cursor-pointer px-4 py-2 font-semibold hover:bg-gray-50`}
          >
            {t("programs_title")}
          </li>
          <li className={`nav-text cursor-pointer px-4 py-2 hover:bg-gray-50`}>
            {t("programs_specialized")}
          </li>
          <li className={`nav-text cursor-pointer px-4 py-2 hover:bg-gray-50`}>
            {t("programs_literacy")}
          </li>
          <li className={`nav-text cursor-pointer px-4 py-2 hover:bg-gray-50`}>
            {t("programs_certification")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgramsDropdown;
