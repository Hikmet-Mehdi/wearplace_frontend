import { HTMLAttributes, PropsWithChildren } from 'react';
import { FC } from 'react';

interface GridProps extends HTMLAttributes<HTMLDivElement> {}

export const Grid: FC<GridProps & PropsWithChildren> = ({
  children,
  ...props
}) => {
  return (
    <div
      className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      {...props}
    >
      {children}
    </div>
  );
};
