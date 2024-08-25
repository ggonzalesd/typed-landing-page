import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { EnLang } from './en';
import { EsLang } from './es';

const resources = {
  en: {
    translation: EnLang,
  },
  es: {
    translation: EsLang,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
