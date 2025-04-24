import React from 'react';
import { IconProps } from '../iconProps';

export const IconStock: React.FC<IconProps> = ({ size, fill }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.1667 12.8333H4.5C3.11917 12.8333 2 13.9525 2 15.3333V22H11.1667V12.8333ZM4.91667 17V15.3333H8.25V17H4.91667ZM19.5 12.8333H12.8333V22H22V15.3333C22 13.9525 20.8808 12.8333 19.5 12.8333ZM19.0833 17H15.75V15.3333H19.0833V17ZM14.5 2H9.5C8.12167 2 7 3.12167 7 4.5V11.1667H17V4.5C17 3.12167 15.8783 2 14.5 2ZM13.6667 6.16667H10.3333V4.5H13.6667V6.16667Z'
        fill={fill}
      />
    </svg>
  );
};
