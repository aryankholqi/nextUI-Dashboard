import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import faTranslation from "./locales/fa/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  fa: {
    translation: faTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
