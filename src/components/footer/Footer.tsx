import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Waves } from './Waves';
import { router } from './router';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='flex w-full flex-col'>
      <Waves className='text-blue-950' />
      <div className='flex min-h-12 w-full flex-col items-center gap-3 bg-blue-950 pb-2 pt-8'>
        <div className='flex flex-wrap gap-4'>
          <FaFacebook size={24} />
          <FaTwitter size={24} />
          <FaLinkedin size={24} />
          <FaInstagram size={24} />
        </div>
        <div className='flex flex-wrap gap-2'>
          {router.map(({ path, display }) => (
            <Link key={path} to={path}>
              {display}
            </Link>
          ))}
        </div>
        <p>Grober Gonzales 2024</p>
      </div>
    </footer>
  );
};
