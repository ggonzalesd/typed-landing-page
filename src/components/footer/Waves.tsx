import { CompType } from '@/types';

export const Waves = (props: CompType) => {
  const { className } = props;
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1240 120'
    >
      <path
        fill='currentColor'
        d='M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,96C840,85,960,43,1080,37.3C1200,32,1320,64,1380,80L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
      ></path>
    </svg>
  );
};
