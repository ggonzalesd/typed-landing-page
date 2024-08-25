import { NavLinkProps } from './NavLink';

export const routes: NavLinkProps[] = [
  {
    path: '/',
    display: 'Home',
    links: [
      {
        path: '/about',
        display: 'About',
      },
      {
        path: '/products',
        display: 'Products',
      },
    ],
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];
