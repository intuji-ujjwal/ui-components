import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox';

const meta = {
  title: 'components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryToggle: Story = {
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
    className: '',
  },
};
