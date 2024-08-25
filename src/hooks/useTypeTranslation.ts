import { useTranslation } from 'react-i18next';
import { LangKeysType } from '@/lang/en';

export const useTypeTranslation = () => {
  const { t } = useTranslation();

  return (key: LangKeysType | LangKeysType[]) => t(key);
};
