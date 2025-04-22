import React, { useId } from 'react';
import { AccordionItem } from './AccordionItem';
import { AccordionProps } from '../types';
import useAccordionState from '../hook/useAccordionState';
import { ChevronUpIcon, ChevronDownIcon } from '../assets/icons';

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  UpIcon = ChevronUpIcon,
  DownIcon = ChevronDownIcon,
}) => {
  const id = useId();
  const { openItems, handleToggle } = useAccordionState(allowMultiple);

  return (
    <div
      className='rounded-md border border-gray-200'
      role='tablist'
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index + id}
          title={item.title}
          open={openItems.includes(index)}
          onToggle={handleToggle}
          index={index}
          UpIcon={UpIcon}
          DownIcon={DownIcon}
        >
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
