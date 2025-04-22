import React, { useEffect, useState } from 'react';
import './cartTable.css';
import { CartHeader } from './CartHeader/CartHeader';
import TableLoader from './TableSkeleton';
import { Table } from './CartListTable/Table';
import Pagination from '../../Pagination/Pagination';

export interface rowContentProp {
  size: number;
  leadTime: string;
  itemStatus: string;
  quantity: number;
  orderQuantity: number;
  amount: number;
  returnInfo: string;
}

export interface cartTableProps {
  items: rowContentProp[];
  desiredRows: number;
  returnOrder?: boolean;
}

export const CartItems: React.FC<cartTableProps> = ({
  items = [
    {
      size: 6,
      leadTime: '5 - 7 Days (Est. 17th Mar, 2024)',
      itemStatus: 'badge',
      quantity: 7,
      orderQuantity: 5,
      amount: 232499,
      returnInfo: 'dsfsfsfsfsfsfsfsf',
    },
  ],
  desiredRows = 1,
  returnOrder = false,
}) => {
  const totalPages = Math.ceil(items.length);
  const [currentPage, setCurrentPage] = useState(1);
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const [loading, setLoading] = useState(true);
  const [showVariants, setShowVariants] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [returnOrder]);

  const toggleVariant = (index: number) => {
    setShowVariants((prev) =>
      prev.map((_, i) => (i === index ? !prev[i] : false)),
    );
  };

  return (
    <div className='rounded-lg border-2 border-dashed p-4'>
      {Array(desiredRows)
        .fill(null)
        .map((_, index) => (
          <React.Fragment key={index}>
            <CartHeader
              variant={showVariants[index] ? 'Hide Variant' : 'Show Variant'}
              setShowVariant={() => toggleVariant(index)}
              showVariant={showVariants[index]}
              returnOrder={returnOrder}
            />
            {showVariants[index] && (
              <div className='responsive-table w-full overflow-x-auto rounded-lg border-b-2 border-t-2 border-dashed bg-white p-4 pb-2 transition-all delay-150 ease-in-out'>
                {loading ? (
                  <TableLoader returnOrder={returnOrder} />
                ) : (
                  <Table
                    returnOrder={returnOrder}
                    items={items}
                    desiredRows={desiredRows}
                  />
                )}
                <Pagination
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                  totalItems={desiredRows}
                  currentPage={currentPage}
                  showCount={8}
                  handleNextPage={handleNextPage}
                  handlePreviousPage={handlePreviousPage}
                />
                <div className='w-full border-t-2 p-8 text-right text-base'>
                  Total: <span className='text-xl font-black'>£425.99</span>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
    </div>
  );
};
