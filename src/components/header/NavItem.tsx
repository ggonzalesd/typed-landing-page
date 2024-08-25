import { Link } from 'react-router-dom';
import { LinkPropType } from '@/types';

export const NavItem = (props: LinkPropType) => {
  const { path, display } = props;
  return (
    <Link
      to={path}
      className='rounded-md border-[1px] border-white/20 bg-blue-700/20 px-2 text-center text-white backdrop-blur-md transition-colors hover:bg-blue-600/30'
    >
      {display}
    </Link>
  );
};
