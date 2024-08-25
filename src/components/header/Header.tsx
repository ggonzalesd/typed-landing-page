import { Drawer } from './Drawer';
import { Navbar } from './Navbar';
import { routes } from './router';

export const Header = () => {
  return (
    <>
      <header className='fixed left-0 top-0 z-10 flex h-12 w-full items-center justify-start gap-2 bg-slate-800 sm:justify-between'>
        <Drawer routes={routes} />
        <span className='px-2'>My Page</span>
        <Navbar routes={routes} />
      </header>
    </>
  );
};
