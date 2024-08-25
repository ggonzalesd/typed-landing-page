import cn from 'classnames';
import { FaFacebook, FaInstagram, FaReddit, FaTwitter } from 'react-icons/fa';

import { BasicView } from '@/components';
import images from '@/assets/home';

import styles from './HomeView.module.css';

/*
const Background = () => (
  <div className='relative w-full'>
    <div className={styles.Background} />
  </div>
);
*/

export const HeroHomeView = () => {
  return (
    <BasicView>
      <div className='flex flex-col-reverse items-center bg-green-500/0 py-4 sm:flex-row'>
        <div className='flex h-full items-center px-6'>
          <img
            src={images.hero}
            className={cn(styles.Hero, 'h-auto w-full')}
          />
        </div>
        <div className='flex flex-grow flex-col items-center gap-3 bg-red-600/0 p-4'>
          <h1 className='text-3xl font-extrabold'>THIS IS THE HERO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            voluptate magnam quam, quas repudiandae commodi vel. Officia amet
            sunt id maxime ad consequatur magnam quisquam voluptatem eligendi
            dolore! Hic, reiciendis?
          </p>
          <div className='flex w-full flex-col gap-2'>
            <p className='text-start font-bold'>Check my Social Medias</p>
            <div className='flex flex-wrap gap-4'>
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaReddit size={24} />
              <FaInstagram size={24} />
            </div>
          </div>
        </div>
      </div>
    </BasicView>
  );
};
