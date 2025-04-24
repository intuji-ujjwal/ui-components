import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  "rounded-full shrink-0 border border-grey-200 overflow-hidden block before:content-[''] before:block before:pt-[100%] before:bg-white relative",
  {
    variants: {
      size: {
        'xs': 'size-4 -ml-0.5',
        'sm': 'size-5 -ml-1',
        'md': 'size-6 -ml-1',
        'lg': 'size-8 -ml-2',
        'xl': 'size-11 -ml-2.5',
        '2xl': 'size-14 -ml-3',
        '3xl': 'size-16 -ml-3.5',
      },
      type: {
        single: 'ml-0',
        group: 'first:ml-0',
      },
    },
    defaultVariants: {
      size: 'md',
      type: 'single',
    },
  },
);
