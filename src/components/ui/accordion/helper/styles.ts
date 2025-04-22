import { cva } from 'cva';

export const accordionStyles = cva(
  'w-full p-4 text-left focus:outline-none transition-height duration-300 ease-in-out flex items-center justify-between px-4 py-3',
  {
    variants: {
      background: {
        active: 'bg-gray-300 text-white',
        default: 'bg-white text-black hover:bg-gray-300',
        disabled: 'bg-gray-200 text-gray-500 cursor-not-allowed',
      },
    },
    defaultVariants: {
      background: 'default',
    },
  },
);
