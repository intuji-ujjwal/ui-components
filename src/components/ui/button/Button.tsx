import React from 'react';
import { VariantProps } from 'class-variance-authority';

import { cn } from '../../../utils/cn';
import { buttonVariants } from './constant';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, intent, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ intent, variant, size }), className)}
        data-cy={`${variant}-button, type ${intent}`}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
