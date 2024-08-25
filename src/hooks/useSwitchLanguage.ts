import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useSwitchLanguage = () => {
  const [langIndex, setLangIndex] = useState(0);
  const { i18n } = useTranslation();

  return {
    index: langIndex,
    next: () => {
      setLangIndex((state) => {
        const n = i18n.languages.length;
        console.log({ langs: i18n.languages });
        const newState = state + 1 >= n ? 0 : state + 1;
        i18n.changeLanguage(i18n.languages[newState]);
        return newState;
      });
    },
    before: () => {
      setLangIndex((state) => {
        const n = i18n.languages.length;
        const newState = state - 1 <= 0 ? n - 1 : state - 1;
        i18n.changeLanguage(i18n.languages[newState]);
        return newState;
      });
    },
  };
};
