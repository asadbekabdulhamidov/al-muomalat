import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Til va flag ma'lumotlarini massivga yig'amiz
const languages = [
  { code: "uz", label: "UZB", flag: "/flags/uz.svg" },
  { code: "ru", label: "RUS", flag: "/flags/ru.svg" },
  { code: "en", label: "ENG", flag: "/flags/gb.svg" },
];

function LanguageDropdown() {
  const { i18n } = useTranslation(); // i18next instance
  const [isOpen, setIsOpen] = useState(false); // dropdown ochilganmi/yo‘qmi

  const currentLang = i18n.language || "en"; // hozirgi tilni aniqlash
  const selectedLang =
    languages.find((lang) => lang.code === currentLang) ||
    languages.find((lang) => lang.code === "en"); // hozirgi flag va label

  // tilni almashtirish funksiyasi
  const handleChangeLanguage = (langCode) => {
    i18n.changeLanguage(langCode); // i18n orqali tilni o‘zgartirish
    setIsOpen(false); // dropdownni yopamiz
  };

  return (
    <div className="relative z-50 inline-block text-left">
      {/* Hozirgi til tugmasi */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center rounded-md px-3 py-2 transition hover:bg-gray-100"
      >
        <img
          src={selectedLang?.flag || "/flags/gb.svg"}
          alt={selectedLang?.label}
          className="mr-2 h-5 w-5"
        />
        {selectedLang?.label}
        <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
        </svg>
      </button>

      {/* Dropdown - boshqa tillar ro‘yxati */}
      {isOpen && (
        <div className="absolute mt-2 w-28 rounded-md bg-white shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              className="flex w-full items-center px-3 py-2 transition hover:bg-gray-100"
            >
              <img src={lang.flag} alt={lang.label} className="mr-2 h-5 w-5" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
