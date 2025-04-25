import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'rounded leading-none inline-flex items-center justify-center capitalize py-2 px-3 text-sm font-medium gap-1.5',
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
