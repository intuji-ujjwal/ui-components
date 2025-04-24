import React, { useEffect, useState } from 'react';
export interface ProgressBarProps {
  percentage?: number;
  color?: string;
  // title?: string;
  min?: number;
  max?: number;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  min,
  max,
  color,
}) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  useEffect(() => {
    setIsAnimated(true);
  }, [percentage]);
  return (
    <div className='flex w-full items-center gap-2 text-sm text-gray-400'>
      <div className=''>£{min}</div>
      <div className='h-2 w-96 overflow-hidden rounded bg-neutral-200 dark:bg-neutral-600'>
        <div
          className={`h-full rounded transition-all duration-500 ${
            isAnimated ? 'animate-progress' : ''
          }`}
          style={{
            width: `${percentage}%`,
            backgroundColor: `${color}`,
          }}
        ></div>
      </div>
      <div>£{max}</div>
      {/* <span>{`${percentage}%`}</span>
      <span>{title}</span> */}
    </div>
  );
};
