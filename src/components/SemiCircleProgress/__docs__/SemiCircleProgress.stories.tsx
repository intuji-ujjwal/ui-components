import {
  SemiCircleProgressProps,
  SemiCircleProgress,
} from '../SemiCircleProgress';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SemiCircleProgress> = {
  title: 'Components/SemiCircleProgress',
  component: SemiCircleProgress,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      options: ['up', 'down'],
      control: { type: 'select' },
    },
    direction: {
      options: ['right', 'left'],
      control: { type: 'select' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<SemiCircleProgressProps> = {
  args: {
    percentage: 10,
    diameter: 200,
    showPercentValue: true,
    stroke: 'red',
    strokeWidth: 20,
    direction: 'right',
    title: 'Tadow',
    background: '#D0D0CE',
  },
};
