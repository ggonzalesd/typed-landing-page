import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import cn from 'classnames';

import { LinkPropType } from '@/types';

import { NavItem } from './NavItem';

import styles from './NavLink.module.css';
import { Button } from '@/ui';

export interface NavLinkProps {
  display: string;
  path: string;
  links?: LinkPropType[];
}

export const NavLink = (props: NavLinkProps) => {
  const { path, display, links } = props;

  const [open, setOpen] = useState(false);

  return (
    <li className='relative flex items-start sm:items-center'>
      <div className='flex overflow-hidden rounded-md border-[1px] border-white/20'>
        <Link
          to={path}
          className='flex justify-center bg-blue-700/20 px-2 py-1 transition-colors hover:bg-blue-600/30'
        >
          <span className='text-white'>{display}</span>
        </Link>
        {links !== undefined && (
          <Button
            className='flex items-center rounded-r-md bg-blue-800/40 px-1 text-white'
            onClick={() => setOpen(!open)}
          >
            {!open ? <FaAngleDown /> : <FaAngleUp />}
          </Button>
        )}
      </div>
      <div
        className={cn(
          { [styles.Active_NavLinkList]: open && !!links },
          styles.NavLinkList,
          'absolute right-0 top-full flex min-w-full origin-top flex-col gap-1 py-1',
        )}
      >
        {links?.map(({ path, display }) => (
          <NavItem key={path} path={path} display={display} />
        ))}
      </div>
    </li>
  );
};
