import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import cn from 'classnames';

import { Button } from '@/ui/button/Button';

import { NavLink, NavLinkProps } from './NavLink';

import styles from './Drawer.module.css';

export interface DrawerProps {
  routes: NavLinkProps[];
}

export const Drawer = (props: DrawerProps) => {
  const { routes } = props;

  const [open, setOpen] = useState(false);

  return (
    <div className='flex h-full items-center px-2 sm:hidden'>
      {/* Button Menu */}
      <Button
        className='rounded-md bg-blue-900/50 backdrop-blur-md'
        onClick={() => setOpen(!open)}
      >
        <BiMenu size={18} />
      </Button>
      {/* List of Links */}
      <div
        className={cn(
          { [styles.Active_Drawer]: open },
          styles.Drawer,
          'absolute left-0 top-full p-2',
        )}
      >
        <div className='flex flex-col'>
          {routes.map(({ path, display, links }) => (
            <NavLink key={path} path={path} display={display} links={links} />
          ))}
        </div>
      </div>
    </div>
  );
};
