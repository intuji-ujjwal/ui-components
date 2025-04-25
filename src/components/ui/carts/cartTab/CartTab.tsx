import React, { useState } from 'react';
import { Button } from '../../button/Button';
import { PayViaTable } from '../payment/payVia/PayViaCredit';
import { PayViaCard } from '../payment/payVia/PayViaCard';

interface CartTabProps {
  payment: string;
  description: string;
  amount: number;
}

export const CartTab: React.FC<CartTabProps> = ({
  payment,
  description,
  amount,
}) => {
  const tabsData = [
    {
      title: 'Direct Payment',
      content: <PayViaCard buttonString='Pay Now' />,
    },
    {
      title: 'Credit Payment',
      content: (
        <PayViaTable
          payment={payment}
          description={description}
          amount={amount}
          buttonString={
            amount > 1500 ? 'Request Credit Now' : 'Pay with Credit'
          }
        />
      ),
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <div className='flex rounded-lg border bg-slate-400 text-slate-500'>
        {tabsData.map((tab, idx) => (
          <div
            className='w-full bg-gray-200 p-2'
            key={idx}
          >
            <Button
              className={`flex w-full gap-2 rounded-lg text-[#000000] transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'border-black bg-white text-black shadow'
                  : 'border-transparent hover:border-gray-200'
              }`}
              onClick={() => handleTabClick(idx)}
            >
              {tab.title}
            </Button>
          </div>
        ))}
      </div>
      <div className='mt-4'>{tabsData[activeTabIndex].content}</div>
    </>
  );
};
