import React from 'react';
interface StickyButtonBarProps {
  buttonOne: React.ReactNode;
  buttonTwo: React.ReactNode;
}

export const StickyButtonBar = ({
  buttonOne,
  buttonTwo,
}: StickyButtonBarProps) => {
  return (
    <div className='bottom-updates-field bg-accent-700 z-10 mt-6 flex items-center justify-end gap-3 rounded px-6 py-4'>
      {buttonOne}
      {buttonTwo}
    </div>
  );
};
