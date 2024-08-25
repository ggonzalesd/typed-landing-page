import React from 'react';
import { ClassNameProp } from '@/types';

export interface DescriptionCardProp {
  title: string;
  content: string[];
  icon: React.FunctionComponentElement<ClassNameProp>;
}

export const DescriptionCard = (props: DescriptionCardProp) => {
  const { title, content, icon } = props;

  const newIcon = React.cloneElement(icon, {
    className: 'max-h-32',
  });

  return (
    <div className='flex flex-col rounded-md bg-blue-800/20 p-4 backdrop-blur-lg'>
      {newIcon}
      {/* <BurgerSvg className='max-h-32' /> */}
      <span className='font-bold'>{title}</span>
      <div>
        {content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};
