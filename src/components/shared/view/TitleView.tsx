import cn from 'classnames';

import { BasicView, BasicViewProps } from './BasicView';

import { Position } from '@/types';

interface TitleViewProps extends BasicViewProps {
  title: string;
  position?: Position;
}

export const TitleView = (props: TitleViewProps) => {
  const {
    title,
    after,
    before,
    children,
    className,
    position = 'CENTER',
  } = props;

  return (
    <BasicView
      after={after}
      before={before}
      className={className}
    >
      <div
        className={cn('flex flex-col gap-1 px-2 pb-4', {
          'items-start': position === 'START',
          'items-center': position === 'CENTER',
          'items-end': position === 'END',
        })}
      >
        <span className='text-3xl font-bold'>{title}</span>
        <div className='h-2 w-20 rounded-sm bg-gradient-to-r from-blue-100 to-blue-200' />
      </div>
      {children}
    </BasicView>
  );
};
