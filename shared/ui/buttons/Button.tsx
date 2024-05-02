import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { ViewType } from '@/shared/ui/types';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: ViewType;
}

const BUTTON_VIEW: Record<ViewType, string> = {
  ghost: '',
  primary:
    'bg-blue-600 focus:ring-blue-300 focus:ring-opacity-80 hover:bg-blue-500 ',
  secondary: 'text-gray-600 hover:bg-gray-100',
};

export const Button: FC<ButtonProps & PropsWithChildren> = ({
  children,
  view = 'primary',
  ...props
}) => {
  return (
    <button
      className={twMerge(
        'px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg',
        'focus:outline-none focus:ring ',
        'sm:text-base sm:px-6',
        BUTTON_VIEW[view],
      )}
      {...props}
    >
      W{children}
    </button>
  );
};
