import React, { useEffect } from 'react';
import './pagination.css';

export type PaginationProps = {
  totalPages: number;
  totalItems: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handlePreviousPage?: () => void;
  handleNextPage?: () => void;
  handleShowCountChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  showCount: number;
};

const PrevIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.5'
        y='0.5'
        width='23'
        height='23'
        rx='3.5'
        stroke='#E5E7EB'
      />
      <path
        d='M14.3541 16.6463C14.4006 16.6927 14.4374 16.7479 14.4626 16.8086C14.4877 16.8693 14.5007 16.9343 14.5007 17C14.5007 17.0657 14.4877 17.1308 14.4626 17.1915C14.4374 17.2521 14.4006 17.3073 14.3541 17.3538C14.3077 17.4002 14.2525 17.4371 14.1918 17.4622C14.1311 17.4873 14.0661 17.5003 14.0004 17.5003C13.9347 17.5003 13.8696 17.4873 13.8089 17.4622C13.7482 17.4371 13.6931 17.4002 13.6466 17.3538L8.64664 12.3538C8.60015 12.3073 8.56328 12.2522 8.53811 12.1915C8.51295 12.1308 8.5 12.0657 8.5 12C8.5 11.9343 8.51295 11.8692 8.53811 11.8085C8.56328 11.7478 8.60015 11.6927 8.64664 11.6463L13.6466 6.64625C13.7405 6.55243 13.8677 6.49973 14.0004 6.49973C14.1331 6.49973 14.2603 6.55243 14.3541 6.64625C14.448 6.74007 14.5007 6.86732 14.5007 7C14.5007 7.13269 14.448 7.25993 14.3541 7.35375L9.70727 12L14.3541 16.6463Z'
        fill='black'
      />
    </svg>
  );
};

const NextIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.5'
        y='0.5'
        width='23'
        height='23'
        rx='3.5'
        stroke='#E5E7EB'
      />
      <path
        d='M15.354 12.3538L10.354 17.3538C10.3076 17.4002 10.2524 17.4371 10.1917 17.4622C10.131 17.4873 10.066 17.5003 10.0003 17.5003C9.93458 17.5003 9.86953 17.4873 9.80883 17.4622C9.74813 17.4371 9.69298 17.4002 9.64653 17.3538C9.60007 17.3073 9.56322 17.2521 9.53808 17.1915C9.51294 17.1308 9.5 17.0657 9.5 17C9.5 16.9343 9.51294 16.8693 9.53808 16.8086C9.56322 16.7479 9.60007 16.6927 9.64653 16.6463L14.2934 12L9.64653 7.35375C9.55271 7.25993 9.5 7.13269 9.5 7C9.5 6.86732 9.55271 6.74007 9.64653 6.64625C9.74035 6.55243 9.8676 6.49973 10.0003 6.49973C10.133 6.49973 10.2602 6.55243 10.354 6.64625L15.354 11.6463C15.4005 11.6927 15.4374 11.7478 15.4626 11.8085C15.4877 11.8692 15.5007 11.9343 15.5007 12C15.5007 12.0657 15.4877 12.1308 15.4626 12.1915C15.4374 12.2522 15.4005 12.3073 15.354 12.3538Z'
        fill='black'
      />
    </svg>
  );
};
const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  totalItems,
  currentPage,
  setCurrentPage,
  handlePreviousPage,
  handleNextPage,
  handleShowCountChange,
  showCount,
}) => {
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = Math.min(startIndex + showCount, totalItems);
  const validCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  // Update the currentPage state if needed
  useEffect(() => {
    if (currentPage !== validCurrentPage && validCurrentPage !== 0) {
      setCurrentPage(validCurrentPage);
    }
  }, [currentPage, validCurrentPage, setCurrentPage]);
  const totalCount = Math.ceil(totalItems / showCount);
  return (
    <div className='pagination bg-danger-0 flex flex-wrap items-center justify-between px-6 py-4 text-sm'>
      <div
        className={`${
          endIndex ? 'opacity-100' : 'opacity-0'
        } total-items text-sm font-semibold text-black`}
      >
        {startIndex + 1 !== endIndex
          ? `${startIndex + 1}-${endIndex}`
          : `${endIndex}`}{' '}
        of <span className='text-gray-400'>{totalItems}</span>
      </div>

      {totalItems > 25 && (
        <>
          <div className='pagination-field-wrap'>
            <div className='pagination-field flex items-center gap-10'>
              <button
                className={`prev text-sm ${
                  currentPage === 1
                    ? 'cursor-not-allowed opacity-30'
                    : 'opacity-100'
                }`}
                disabled={currentPage === 1}
                aria-disabled={currentPage === 1}
                onClick={handlePreviousPage}
              >
                <PrevIcon />
              </button>
              <div className='paginate flex flex-wrap items-center gap-2.5 text-sm'>
                <span>Page</span>
                <input
                  type='number'
                  className='pagination__input--number focus:outline-primary-700 h-6 w-8 rounded border border-neutral-100 p-0 text-center text-base leading-none font-medium'
                  min={1}
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setCurrentPage(val);
                  }}
                />
                <span className='noWrap'>of {totalCount}</span>
              </div>
              <button
                className={`next text-sm ${
                  currentPage === totalPages
                    ? 'cursor-not-allowed opacity-30'
                    : 'opacity-100'
                }`}
                disabled={currentPage === totalPages}
                aria-disabled={currentPage === totalPages}
                onClick={handleNextPage}
              >
                <NextIcon />
              </button>
            </div>
          </div>
          <div
            className={`show-total-number-items text-primary-700 flex min-w-[130px] flex-wrap items-center gap-2.5 text-sm ${
              totalItems <= 3 ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className='text-sm text-black'>Show</span>
            <select
              name='show-items'
              className='focus:outline-primary-700 w-[64px] rounded border border-neutral-100 text-center text-base leading-none font-medium'
              value={showCount}
              onChange={handleShowCountChange}
            >
              <option value='25'>25</option>
              {totalItems > 25 && <option value='50'>50</option>}
              {totalItems > 50 && <option value='100'>100</option>}
            </select>
            <span className='text-sm text-black'>Row per Page</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
