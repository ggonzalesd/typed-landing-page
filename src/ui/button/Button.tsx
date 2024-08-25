import cn from 'classnames';

import { CompType } from '@/types';

interface ButtonProps extends CompType {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  const { disabled, className, children, onClick } = props;

  return (
    <button
      disabled={disabled}
      className={cn('p-2 text-white', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
