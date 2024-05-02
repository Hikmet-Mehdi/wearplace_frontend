import { Level } from '../types';
import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
}

const HEADER_STYLES: Record<Level, string> = {
  '1': 'text-4xl',
  '2': 'text-3xl',
  '3': 'text-2xl',
  '4': 'text-xl',
  '5': 'text-base',
};

export const Header: FC<HeaderProps & PropsWithChildren> = ({
  children,
  className,
  level = 4,
  ...props
}) => {
  const Head = `h${level}` as keyof Pick<
    React.JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  >;

  return (
    <Head
      className={twMerge(
        'font-bold tracking-tight text-gray-900',
        HEADER_STYLES[level],
        className,
      )}
      {...props}
    >
      {children}
    </Head>
  );
};
