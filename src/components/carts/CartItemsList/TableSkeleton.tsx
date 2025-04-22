import React from 'react';

const TableLoader: React.FC<{ returnOrder: boolean }> = ({ returnOrder }) => {
  return (
    <div className='animate-pulse'>
      <div className='mb-4 h-8 w-full rounded bg-gray-200'></div>
      <div className='space-y-2'>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className='flex space-x-4'
          >
            <div className='h-6 w-1/5 rounded bg-gray-200'></div>
            {returnOrder ? (
              <>
                <div className='h-6 w-1/5 rounded bg-gray-200'></div>
                <div className='h-6 w-1/5 rounded bg-gray-200'></div>
                <div className='h-6 w-1/5 rounded bg-gray-200'></div>
                <div className='h-6 w-1/5 rounded bg-gray-200'></div>
              </>
            ) : (
              <>
                <div className='h-6 w-1/5 rounded bg-gray-200'></div>
                <div className='h-6 w-1/5 rounded bg-gray-200'></div>
                <div className='h-6 w-2/5 rounded bg-gray-200'></div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableLoader;
