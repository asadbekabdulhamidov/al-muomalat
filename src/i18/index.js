import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Har bir til faylini import qilamiz
import uzTranslation from './locales/uz/translation.json';
import ruTranslation from './locales/ru/translation.json';
import enTranslation from './locales/en/translation.json';

// Til resurslarini i18n'ga beramiz
const resources = {
  uz: { translation: uzTranslation },
  ru: { translation: ruTranslation },
  en: { translation: enTranslation },
};

i18n
  .use(LanguageDetector) // brauzer tilini aniqlash uchun
  .use(initReactI18next) // React bilan integratsiya
  .init({
    resources,
    fallbackLng: 'en', // agar aniqlanmasa, default til
    interpolation: {
      escapeValue: false, // React escape qilishga hojat yo‘q
    },
  });

export default i18n;
