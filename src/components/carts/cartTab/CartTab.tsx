import React, { useState } from "react";
import Button from "../../button/Button";
import { PayViaTable } from "../payment/payVia/PayViaCredit";
import { PayViaCard } from "../payment/payVia/PayViaCard";

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
      title: "Direct Payment",
      content: <PayViaCard buttonString="Pay Now" />,
    },
    {
      title: "Credit Payment",
      content: (
        <PayViaTable
          payment={payment}
          description={description}
          amount={amount}
          buttonString={
            amount > 1500 ? "Request Credit Now" : "Pay with Credit"
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
      <div className="flex border bg-slate-400 text-slate-500 rounded-lg">
        {tabsData.map((tab, idx) => (
          <div className="w-full p-2 bg-gray-200" key={idx}>
            <Button
              size="small"
              type="button"
              designType="tertiary"
              varient="primary"
              classes={`transition-colors duration-300 flex gap-2 text-[#000000] w-full rounded-lg ${
                idx === activeTabIndex
                  ? "border-black bg-white shadow text-black"
                  : "border-transparent hover:border-gray-200"
              }`}
              handleClick={() => handleTabClick(idx)}
            >
              {tab.title}
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-4">{tabsData[activeTabIndex].content}</div>
    </>
  );
};
