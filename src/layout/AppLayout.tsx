import cn from 'classnames';

import { Footer, Header } from '@/components';
import { CompType } from '@/types';

export const AppLayout = (props: CompType) => {
  const { className, children } = props;

  return (
    <div
      className={cn(
        className,
        'flex min-h-[100vh] flex-col bg-gradient-to-br from-slate-800 to-slate-950 pt-12',
      )}
    >
      <Header />
      <main className='w-full flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};
