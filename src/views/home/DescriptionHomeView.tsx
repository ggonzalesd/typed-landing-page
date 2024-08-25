import { BurgerSvg, CheeseSvg, ChefSvg, HoneySvg } from '@/assets/svg/products';

import { TitleView } from '@/components';
import { DescriptionCard, DescriptionCardProp } from '@/components/home';
import { useTypeTranslation } from '@/hooks';
import { LangKeysType } from '@/lang/en';
import { useTranslation } from 'react-i18next';

export const DescriptionHomeView = () => {
  const tt = useTypeTranslation();
  const { t } = useTranslation();

  return (
    <TitleView
      title={tt('home.description.title')}
      position='END'
    >
      <div className='grid grid-cols-1 gap-2 sm:grid-cols-4'>
        {products.map(({ title, content, icon }, index) => (
          <DescriptionCard
            key={index}
            title={t(title)}
            content={content.map((text) => t(text))}
            icon={icon}
          />
        ))}
      </div>
    </TitleView>
  );
};

interface DescriptionCardPropLang extends DescriptionCardProp {
  title: LangKeysType;
  content: LangKeysType[];
}

const products: DescriptionCardPropLang[] = [
  {
    title: 'home.description.burger.title',
    content: [
      'home.description.burger.content.p01',
      'home.description.burger.content.p02',
    ],
    icon: <BurgerSvg />,
  },
  {
    title: 'home.description.cheese.title',
    content: [
      'home.description.cheese.content.p01',
      'home.description.cheese.content.p02',
    ],
    icon: <CheeseSvg />,
  },
  {
    title: 'home.description.chef.title',
    content: [
      'home.description.chef.content.p01',
      'home.description.chef.content.p02',
    ],
    icon: <ChefSvg />,
  },
  {
    title: 'home.description.honey.title',
    content: [
      'home.description.honey.content.p01',
      'home.description.honey.content.p02',
    ],
    icon: <HoneySvg />,
  },
];
