import React from 'react';
import { cva, VariantProps } from 'cva';

import { cn } from '../../../lib/utils';

export const badgeVariants = cva(
  'rounded leading-none inline-flex items-center justify-center capitalize py-1 px-2 text-xs gap-1.5',
  {
    variants: {
      variant: {
        gray: 'bg-gray-100 text-gray-800',
        yellow: 'bg-yellow-100 text-yellow-800',
        red: 'bg-red-100 text-red-800',
        green: 'bg-green-100 text-green-800',
        blue: 'bg-blue-100 text-blue-800',
      },
    },
    defaultVariants: {
      variant: 'gray',
    },
  },
);
export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {children}
    </span>
  );
};
