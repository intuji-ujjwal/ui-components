import React, { ReactNode, useState } from 'react';
import Button from '../button/Button';
interface tabProps {
  title: string;
  children: ReactNode;
}
export interface SecondTabProps {
  items: tabProps[];
  count: number;
  borderStyle: string;
  borderColor: string;
}

const SecondTab: React.FC<SecondTabProps> = ({
  items,
  count,
  borderStyle,
  borderColor,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div
      className={`py-8 ${borderStyle} max-w-2xl border-spacing-4 rounded-lg border p-4`}
      style={{
        borderColor: `${borderColor}`,
      }}
    >
      <div className={`flex rounded-lg border bg-slate-50 text-slate-500`}>
        {/* {Array(count)
          .fill(null)
          .map((_, index) => (
            <div className="w-full bg-gray-200" key={index}>
              <Button
                size="small"
                type="button"
                designType="tertiary"
                varient="primary"
                classes={`transition-colors duration-300 flex gap-2 text-[#000000] w-full rounded-lg ${
                  index === activeTabIndex
                    ? "border-black bg-white shadow text-black"
                    : "border-transparent hover:border-gray-200 text-grayColor"
                }`}
                handleClick={() => handleTabClick(index)}
              >
                {items[index]?.title}
              </Button>
            </div>
          ))} */}
        {Array.from({ length: count }, (_, index) => (
          <div
            className='w-full'
            key={index}
          >
            <Button
              size='small'
              type='button'
              designType='tertiary'
              varient='primary'
              classes={`transition-colors duration-300  flex gap-2 text-[#000000] w-full rounded-lg ${
                index === activeTabIndex
                  ? 'border-black bg-white shadow font-black'
                  : 'border-transparent hover:border-gray-200 text-grayColor'
              }`}
              handleClick={() => handleTabClick(index)}
            >
              {items[index]?.title}
            </Button>
          </div>
        ))}
      </div>
      <div className='mt-4'>{items[activeTabIndex].children}</div>
    </div>
  );
};
export default SecondTab;
