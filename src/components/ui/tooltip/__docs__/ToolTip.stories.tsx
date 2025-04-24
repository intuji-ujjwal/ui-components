import { Meta, StoryObj } from '@storybook/react';
import '../ToolTip';
import { ToolTip, ToolTipProps } from '../ToolTip';

const meta: Meta<typeof ToolTip> = {
  title: 'Components/ToolTip',
  component: ToolTip,
  tags: ['autodocs'],
  argTypes: {
    position: {
      options: ['left', 'right', 'top', 'bottom'],
      control: { type: 'select' },
    },
  },
};
export default meta;

export const Primary: StoryObj<ToolTipProps> = {
  args: {
    title: 'Payable and Used',
    position: 'top',
  },
};
