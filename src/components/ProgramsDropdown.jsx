import React from 'react';
import { useTranslation } from 'react-i18next';

const ProgramsDropdown = () => {
  const { t } = useTranslation();
  return (
    <div className="relative group">
      {/* Trigger */}
      <button className="flex items-center gap-1 nav-text   group-hover:text-primary transition">
        {t('nav_programs')}
        <svg
          className="w-4 h-4 transform group-hover:rotate-180 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-md border rounded w-64 z-50">
        <ul className="text-sm text-gray-800 divide-y divide-gray-200">
          <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer nav-text font-semibold">
            {t('programs_title')}
          </li>
          <li className="px-4 py-2 nav-text hover:bg-gray-50 cursor-pointer">
            {t('programs_specialized')}
          </li>
          <li className="px-4 py-2 nav-text hover:bg-gray-50 cursor-pointer">
            {t('programs_literacy')}
          </li>
          <li className="px-4 py-2 nav-text hover:bg-gray-50 cursor-pointer">
            {t('programs_certification')}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgramsDropdown;
