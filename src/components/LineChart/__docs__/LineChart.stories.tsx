import { Meta, StoryObj } from '@storybook/react';
import LineChart, { LineChartProps } from '../LineChart';
const meta: Meta<typeof LineChart> = {
  title: 'Components/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<LineChartProps> = {
  args: {
    // color: "yellow",
    showScales: false,
    items: [
      {
        dataOne: 10,
        dataTwo: 20,
        dataThree: 30,
        dataFour: 70,
        dataFive: 20,
        borderColor: 'blue',
        shadowColor: 'rgba(0, 0, 255, 0.1)',
        zIndex: 2,
      },
      {
        dataOne: 90,
        dataTwo: 40,
        dataThree: 60,
        dataFour: 80,
        dataFive: 20,
        borderColor: 'red',
        shadowColor: 'rgba(255, 0, 0, 0.2)',
        zIndex: 40,
      },
      {
        dataOne: 60,
        dataTwo: 40,
        dataThree: 30,
        dataFour: 20,
        dataFive: 10,
        borderColor: 'yellow',
        shadowColor: 'rgba(255, 255, 0, 0.5)',
        zIndex: 100,
      },
    ],
    bars: 1,
    showShadow: false,
  },
};
