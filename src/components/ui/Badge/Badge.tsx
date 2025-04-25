import { BadgeProps } from './types';
import { cn } from '../../../utils/cn';
import { badgeVariants } from './constant/Badge';

export const Badge = ({
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
