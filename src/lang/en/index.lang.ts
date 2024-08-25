import { HomeEnLang } from './home.lang';

export const EnLang = {
  ...HomeEnLang,
};

export type LangKeysType = keyof typeof EnLang;
