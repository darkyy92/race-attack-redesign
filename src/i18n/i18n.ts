import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonDe from './locales/de/common.json';
import homeDe from './locales/de/home.json';
import navigationDe from './locales/de/navigation.json';
import nightlinerDe from './locales/de/nightliner.json';
import tourCrewDe from './locales/de/tour-crew.json';
import truckDe from './locales/de/truck.json';
import yachtDe from './locales/de/yacht.json';
import galleryDe from './locales/de/gallery.json';
import aboutDe from './locales/de/about.json';
import contactDe from './locales/de/contact.json';
import legalDe from './locales/de/legal.json';

import commonEn from './locales/en/common.json';
import homeEn from './locales/en/home.json';
import navigationEn from './locales/en/navigation.json';
import nightlinerEn from './locales/en/nightliner.json';
import tourCrewEn from './locales/en/tour-crew.json';
import truckEn from './locales/en/truck.json';
import yachtEn from './locales/en/yacht.json';
import galleryEn from './locales/en/gallery.json';
import aboutEn from './locales/en/about.json';
import contactEn from './locales/en/contact.json';
import legalEn from './locales/en/legal.json';

const resources = {
  de: {
    common: commonDe,
    home: homeDe,
    navigation: navigationDe,
    nightliner: nightlinerDe,
    tourCrew: tourCrewDe,
    truck: truckDe,
    yacht: yachtDe,
    gallery: galleryDe,
    about: aboutDe,
    contact: contactDe,
    legal: legalDe
  },
  en: {
    common: commonEn,
    home: homeEn,
    navigation: navigationEn,
    nightliner: nightlinerEn,
    tourCrew: tourCrewEn,
    truck: truckEn,
    yacht: yachtEn,
    gallery: galleryEn,
    about: aboutEn,
    contact: contactEn,
    legal: legalEn
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    defaultNS: 'common',
    
    detection: {
      order: ['navigator', 'htmlTag', 'cookie', 'localStorage', 'sessionStorage', 'querystring', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },

    interpolation: {
      escapeValue: false // React already escapes by default
    },

    react: {
      useSuspense: false
    }
  });

export default i18n;