import React from 'react';

import { TitleView } from '@/components';
import { BurgerSvg, CheeseSvg, ChefSvg, HoneySvg } from '@/assets/svg/products';

import { ClassNameProp } from '@/types';

export const DescriptionHomeView = () => {
  const icon = React.cloneElement<ClassNameProp>(<BurgerSvg />, {
    className: 'max-h-32',
  });

  return (
    <TitleView
      title='Hello World'
      position='END'
    >
      <div className='grid grid-cols-1 gap-2 sm:grid-cols-4'>
        <div className='flex flex-col rounded-md bg-blue-800/20 backdrop-blur-lg'>
          {icon}
          {/* <BurgerSvg className='max-h-32' /> */}
          <span className=''>Burger</span>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, libero.
            </p>
          </div>
        </div>
        <CheeseSvg />
        <ChefSvg />
        <HoneySvg />
      </div>
    </TitleView>
  );
};
