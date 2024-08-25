import { NavLink, NavLinkProps } from './NavLink';

export interface NavbarProps {
  routes: NavLinkProps[];
}

export const Navbar = (props: NavbarProps) => {
  const { routes } = props;

  return (
    <nav className='hidden h-full px-2 sm:flex'>
      <ul className='flex gap-2'>
        {routes.map(({ path, display, links }) => (
          <NavLink key={path} path={path} display={display} links={links} />
        ))}
      </ul>
    </nav>
  );
};
