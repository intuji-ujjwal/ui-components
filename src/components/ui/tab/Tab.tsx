import React, { ReactNode, useState } from 'react';
import { IconUser } from '../icons/regular/user';
import { IconCheck } from '../icons/regular/check';
import { IconWarning } from '../icons/fill/warning';

interface ChildrenProps {
  title?: string;
  children: ReactNode;
}

export interface TabProps {
  icon: keyof typeof icons;
  items?: ChildrenProps[];
  fill: string;
}
const icons = {
  'reg-check': IconCheck,
  'reg-user': IconUser,
  'fill-warning': IconWarning,
};
export const GroupTab: React.FC<TabProps> = ({
  items,
  icon,
  fill = 'black',
}) => {
  const tabsData = items ?? [];
  const Component = icons[icon];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className='flex gap-8 space-x-3'>
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <div
              key={idx}
              className={`flex gap-4 border-b-4 py-2 transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'border-black'
                  : 'border-transparent hover:border-gray-200'
              }`}
            >
              <div className='rounded-full border p-2'>
                <Component
                  fill={fill}
                  size={12}
                />
              </div>
              <button
                key={idx}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.title}
              </button>
            </div>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className={`py-4 text-${fill}`}>
        <p>{tabsData[activeTabIndex].children}</p>
      </div>
    </div>
  );
};
