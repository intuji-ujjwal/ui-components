import { useId } from 'react';
import { AccordionProps } from '../types';
import { cn } from '../../../../utils/cn';
import { AccordionItem } from './AccordionItem';
import useAccordionState from '../hook/useAccordionState';
import { ChevronUpIcon, ChevronDownIcon } from '../assets/icons';

const Accordion = ({
  items,
  className,
  allowMultiple = false,
  UpIcon = ChevronUpIcon,
  DownIcon = ChevronDownIcon,
  ...props
}: AccordionProps) => {
  const id = useId();
  const { openItems, handleToggle } = useAccordionState(allowMultiple);

  return (
    <div
      role='tablist'
      className={cn('rounded-md border border-gray-200', className)}
      {...props}
    >
      {items.map((item, index) => (
        <AccordionItem
          index={index}
          UpIcon={UpIcon}
          key={index + id}
          title={item.title}
          DownIcon={DownIcon}
          onToggle={handleToggle}
          open={openItems.includes(index)}
        >
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
