import React from 'react';
import { cn } from '../../../../utils/cn';
import { accordionStyles } from '../helper/styles';
import { AccordionItemInternalProps } from '../types';

export const AccordionItem: React.FC<AccordionItemInternalProps> = ({
  title,
  children,
  open,
  onToggle,
  index,
  UpIcon,
  DownIcon,
}) => {
  const panelId = `accordion-panel-${index}`;

  const renderIcon = () => {
    const IconComponent = open ? UpIcon : DownIcon;
    if (!IconComponent) return null;

    return (
      <IconComponent
        aria-hidden='true'
        className='h-5 w-5 text-gray-500'
      />
    );
  };

  return (
    <div className='border-t border-gray-200 first:border-t-0'>
      <button
        type='button'
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => onToggle(index)}
        className={accordionStyles({
          background: open ? 'active' : 'default',
        })}
      >
        <span className='font-medium text-gray-900'>{title}</span>
        {renderIcon()}
      </button>
      <div
        id={panelId}
        aria-hidden={!open}
        aria-labelledby={`accordion-title-${index}`}
        className={cn('bg-gray-50 px-4 py-3', open ? 'block' : 'hidden')}
      >
        <div className='text-gray-700'>{children}</div>
      </div>
    </div>
  );
};
