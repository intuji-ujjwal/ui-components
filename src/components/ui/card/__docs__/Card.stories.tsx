import { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta = {
  title: 'Components/Card',
  component: Example,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Gradient: Story = {
  args: {
    children: 'Card',
  },
  play: () => console.log('Card clicked'),
};
