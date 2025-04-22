import type { Meta, StoryObj } from '@storybook/react';
import ImageComponent from '../Image';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'components/ImageComponent',
  component: ImageComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof ImageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: '',
    classes: '',
    alt: 'image alt',
    width: 100,
    height: 100,
  },
};
