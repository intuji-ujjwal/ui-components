import { ProgressBar, ProgressBarProps } from '../ProgressBar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<ProgressBarProps> = {
  args: {
    min: 0,
    max: 100,
    percentage: 40,
    color: 'red',
  },
};
