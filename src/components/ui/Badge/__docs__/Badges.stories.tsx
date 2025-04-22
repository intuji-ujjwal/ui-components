import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../Badge';

const meta: Meta = {
  title: 'components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'yellow', 'red', 'green', 'blue', 'primary'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};
