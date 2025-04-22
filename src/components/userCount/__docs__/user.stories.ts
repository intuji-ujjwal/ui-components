import type { Meta, StoryObj } from '@storybook/react';
import UserCountItem from '../UserCount';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'components/User Stories',
  component: UserCountItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const UserCount: Story = {
  args: {
    title: 'Total User',
    count: 70,
  },
};
