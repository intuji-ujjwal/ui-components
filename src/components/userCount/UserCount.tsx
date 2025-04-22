import Skeleton from 'react-loading-skeleton';
import React from 'react';

export interface UserCountItemProps {
  title: string;
  variant?: 'currency' | 'count';
  count: number;
  children: React.ReactNode;
  isLoading?: boolean;
}

const UserCountItem: React.FC<UserCountItemProps> = ({
  title = 'Total Users',
  count = 70,
  variant = 'count',
  isLoading = false,
  ...props
}: UserCountItemProps) => {
  return (
    <div
      className={`user-count-card bg-danger-0 inline-flex items-center justify-between gap-4 rounded p-4`}
    >
      {props.children ? props.children : ''}
      <div className='text-field'>
        {isLoading ? (
          <Skeleton
            height={29}
            width={100}
            count={2}
          />
        ) : (
          <>
            <h4 className='text-base font-normal text-neutral-500'>{title}</h4>
            <h3 className='text-[28px] font-semibold text-neutral-500'>
              {variant === 'currency' ? (
                <>
                  {count.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  })}
                </>
              ) : (
                <>
                  {count.toLocaleString('en-US', { minimumFractionDigits: 0 })}
                </>
              )}
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default UserCountItem;
