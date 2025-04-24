import { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
import React from 'react';

const meta = {
  title: 'Components/Accordion',
  component: Example,
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultItem = [
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

export const Primary: Story = {
  args: {
    items: defaultItem,
    allowMultiple: true,
  },
  play: () => console.log('Accordion clicked'),
};
