import type { Meta, StoryObj } from '@storybook/react';
import NoResult from '../NoResult';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'components/No Result',
  component: NoResult,
  tags: ['autodocs'],
} satisfies Meta<typeof NoResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'No Result Found',
    desc: 'Result not Found , Please try again',
  },
};
