import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../locales/en/translation.json";
import arTranslation from "../locales/ar/translation.json";
import hnTranslation from "../locales/hn/translation.json";

import cnTranslation from "../locales/cn/translation.json";
import knTranslation from "../locales/kn/translation.json";
import mrTranslation from "../locales/mr/translation.json";
import plTranslation from "../locales/pl/translation.json";
import pnTranslation from "../locales/pn/translation.json";
import rsTranslation from "../locales/rs/translation.json";
import tlTranslation from "../locales/tl/translation.json";
import urTranslation from "../locales/ur/translation.json";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
    hn: {
      translation: hnTranslation,
    },
    cn: {
      translation: cnTranslation,
    },
    kn: {
      translation: knTranslation,
    },
    mr: {
      translation: mrTranslation,
    },
    pl: {
      translation: plTranslation,
    },
    pn: {
      translation: pnTranslation,
    },
    rs: {
      translation: rsTranslation,
    },
    tl: {
      translation: tlTranslation,
    },
    ur: {
      translation: urTranslation,
    },
  },
});

export default i18n;
