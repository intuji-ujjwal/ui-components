import React, { FC } from 'react';
import Accordion from '../components/Accordion';
import { AccordionProps } from '../types';

const items = [
  {
    title: 'Accordion Item 1',
    children: <p>Content for Accordion Item 1</p>,
  },
  {
    title: 'Accordion Item 2',
    children: <p>Content for Accordion Item 2</p>,
  },
  {
    title: 'Accordion Item 3',
    children: <p>Content for Accordion Item 3</p>,
  },
];
const Example: FC<AccordionProps> = ({ allowMultiple }) => {
  return (
    <Accordion
      items={items}
      allowMultiple={allowMultiple}
    />
  );
};

export default Example;
