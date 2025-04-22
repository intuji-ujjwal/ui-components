import React from 'react';

// Define the props interface
export interface SemiCircleProgressProps {
  stroke: string;
  strokeWidth: number;
  background: string;
  diameter: number;
  orientation?: string;
  direction?: string;
  title: string;
  showPercentValue?: boolean;
  percentage: number;
}

// Define the component
export const SemiCircleProgress: React.FC<SemiCircleProgressProps> = ({
  stroke,
  strokeWidth,
  background,
  diameter,
  orientation = 'up',
  direction = 'right',
  title,
  showPercentValue = true,
  percentage,
}) => {
  const coordinateForCircle: number = diameter / 2;
  const radius: number = (diameter - 2 * strokeWidth) / 2;
  const circumference = Math.PI * radius;

  // Ensure percentage is within bounds
  const percentageValue = Math.min(Math.max(percentage, 0), 100);
  const semiCirclePercentage = percentageValue * (circumference / 100);

  let rotation;
  if (orientation === 'down') {
    rotation =
      direction === 'left'
        ? 'rotate(180deg) rotateY(180deg)'
        : 'rotate(180deg)';
  } else {
    rotation = direction === 'right' ? 'rotateY(180deg)' : '';
  }

  return (
    <div
      className='semicircle-container flex flex-col items-center justify-center'
      style={{ position: 'relative' }}
    >
      <svg
        width={diameter}
        height={diameter / 2}
        style={{
          transform: rotation,
          overflow: 'hidden',
        }}
      >
        <circle
          strokeLinecap='round'
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill='none'
          stroke={background}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: circumference,
          }}
        />
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill='none'
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: semiCirclePercentage,
            transition:
              'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s',
          }}
        />
      </svg>
      <div
        className='semicircle-percent-value flex flex-col'
        style={{
          width: '100%',
          left: '0',
          textAlign: 'center',
          bottom: orientation === 'down' ? 'auto' : '0',
          position: 'absolute',
        }}
      >
        {title}
        <div>{showPercentValue && <>{`${percentage}%`}</>}</div>
      </div>
    </div>
  );
};
