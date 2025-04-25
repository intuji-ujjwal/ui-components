import { cva } from 'class-variance-authority';

const baseStyles =
  'flex justify-center items-center gap-x-2 rounded-md font-semibold whitespace-nowrap duration-300 disabled:cursor-not-allowed disabled:pointer-events-auto transition-all focus:outline-none';

const sizeVariants = {
  sm: 'px-6 py-2 text-xs',
  md: 'px-6 py-2 text-base',
  lg: 'px-6 py-2 text-lg',
  xl: 'px-6 py-3 text-lg',
} as const;

export const buttonVariants = cva(baseStyles, {
  variants: {
    intent: {
      solid: 'text-white ring-[4px] ring-transparent',
      outline: 'ring-[1px]',
      tertiary: 'ring-none',
      ghost: 'ring-none uppercase',
    },
    variant: {
      primary:
        ' disabled:bg-primary-50 disabled:text-primary-400 disabled:ring-primary-50',
      yellow:
        'disabled:bg-yellow-50 disabled:text-yellow-400 disabled:ring-yellow-50',
      grey: 'disabled:bg-gray-50 disabled:text-gray-400 disabled:ring-gray-50',
      red: 'disabled:bg-red-50 disabled:text-red-400 disabled:ring-red-50',
      blue: 'disabled:bg-blue-50 disabled:text-blue-400 disabled:ring-blue-50',
      white: 'disabled:bg-gray-50 disabled:text-grey-50 text-blue-600 bg-white',
      greyLight: 'disabled:bg-gray-100 text-gray-600 disabled:ring-gray-50',
      whiteLight:
        'disabled:bg-gray-50 disabled:text-gray-50 text-gray-950 bg-white',
    },
    size: sizeVariants,
  },
  compoundVariants: [
    {
      intent: 'solid',
      variant: 'primary',
      className:
        'bg-primary-600 hover:bg-primary-500 focus:bg-primary-800 focus:ring-primary-200',
    },
    {
      intent: 'outline',
      variant: 'primary',
      className:
        'ring-gray-100 text-primary-600 hover:bg-primary-500 hover:text-white bg-white',
    },
    {
      intent: 'tertiary',
      variant: 'primary',
      className: 'text-primary-600 bg-primary-50',
    },
    {
      intent: 'ghost',
      variant: 'primary',
      className: 'text-primary-800',
    },
    {
      intent: 'solid',
      variant: 'yellow',
      className:
        'bg-yellow-600 hover:bg-yellow-500 focus:bg-yellow-800 focus:ring-yellow-100',
    },
    {
      intent: 'outline',
      variant: 'yellow',
      className: 'ring-gray-100 text-yellow-600',
    },
    {
      intent: 'tertiary',
      variant: 'yellow',
      className: 'text-yellow-600 bg-yellow-50',
    },
    {
      intent: 'ghost',
      variant: 'yellow',
      className: 'text-yellow-800',
    },
    {
      intent: 'solid',
      variant: 'grey',
      className:
        'bg-gray-600 hover:bg-gray-500 focus:bg-gray-800 focus:ring-gray-200',
    },
    {
      intent: 'outline',
      variant: 'grey',
      className: 'ring-gray-100 text-gray-600',
    },
    {
      intent: 'tertiary',
      variant: 'grey',
      className: 'text-gray-600 bg-gray-50 hover:text-white hover:bg-grey-500 ',
    },
    {
      intent: 'ghost',
      variant: 'grey',
      className: 'text-gray-800',
    },
    {
      intent: 'solid',
      variant: 'red',
      className:
        'bg-red-600 hover:bg-red-500 focus:bg-red-800 focus:ring-red-200',
    },
    {
      intent: 'outline',
      variant: 'red',
      className: 'ring-gray-100 text-red-600',
    },
    {
      intent: 'tertiary',
      variant: 'red',
      className: 'text-red-600 bg-red-50',
    },
    {
      intent: 'ghost',
      variant: 'red',
      className: 'text-red-800',
    },
    {
      intent: 'solid',
      variant: 'blue',
      className:
        'bg-blue-600 hover:bg-blue-500 focus:bg-blue-800 focus:ring-blue-200',
    },
    {
      intent: 'outline',
      variant: 'blue',
      className:
        'ring-grey-100 text-blue-600 bg-white hover:bg-blue-500 hover:text-white',
    },
    {
      intent: 'tertiary',
      variant: 'blue',
      className: 'text-blue-600 bg-blue-50',
    },
    {
      intent: 'ghost',
      variant: 'blue',
      className: 'text-blue-800',
    },
  ],
  defaultVariants: {
    intent: 'solid',
    variant: 'primary',
    size: 'md',
  },
});
