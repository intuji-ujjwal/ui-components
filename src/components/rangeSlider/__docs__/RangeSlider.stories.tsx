import { Meta, StoryObj } from '@storybook/react';
import { RangeSlider, RangeSliderProps } from '../RangeSlider';
const meta: Meta<typeof RangeSlider> = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<RangeSliderProps> = {
  args: {
    min: 0,
    max: 100,
    fill: 'red',
  },
};
