import dayjs from 'dayjs';
import DayjsEnModule from 'dayjs/locale/en';
import DayjsFrModule from 'dayjs/locale/fr';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import i18n from 'i18next';
// import LanguageDetector from "i18next-browser-languagedetector";
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import fr from './fr.json';

const srsi18n = i18n.createInstance();

const FALLBACK_LANGUAGE = 'en';

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
};

const initializeLanguage = (language: string) => {
  if (language.startsWith('en')) {
    dayjs.locale(DayjsEnModule);
  } else {
    dayjs.locale(DayjsFrModule);
  }
};

srsi18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(detector)
  .init(
    {
      resources,
      // lng: defaultLocale,
      fallbackLng: FALLBACK_LANGUAGE,

      // keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false // react already safes from xss
      }
    },
    () => {
      if (srsi18n.language) {
        initializeLanguage(srsi18n.language);
      }
      dayjs.extend(localizedFormat);
    }
  );

srsi18n.on('languageChanged', function (lng) {
  initializeLanguage(lng);
});

export default srsi18n;
