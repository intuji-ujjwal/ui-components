import { useState } from 'react';
import { UseAccordionStateResult } from '../types';

const useAccordionState = (allowMultiple: boolean): UseAccordionStateResult => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleMultiple = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index],
    );
  };

  const toggleSingle = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index) ? [] : [index],
    );
  };

  const handleToggle = allowMultiple ? toggleMultiple : toggleSingle;

  return { openItems, handleToggle };
};

export default useAccordionState;
