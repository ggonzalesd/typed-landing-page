import cn from 'classnames';

import { CompType } from '@/types';

export interface BasicViewProps extends CompType {
  before?: React.ReactNode;
  after?: React.ReactNode;
}

export const BasicView = (props: BasicViewProps) => {
  const { children, className, before, after } = props;

  return (
    <section
      className={cn(
        'flex w-full flex-col items-center justify-center',
        className,
      )}
    >
      {before}
      <div className='w-full max-w-screen-lg'>{children}</div>
      {after}
    </section>
  );
};
