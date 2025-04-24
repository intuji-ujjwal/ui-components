import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../Checkbox';

const meta = {
  title: 'components/Toggle Switch',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryToggle: Story = {
  args: {
    type: 'slide',
    children: 'Checkbox',
    checked: false,
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['default', 'slide'],
      },
    },
  },
};
