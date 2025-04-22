import { Meta, StoryObj } from '@storybook/react';
import SecondTab, { SecondTabProps } from '../SecondTab';
const meta: Meta<typeof SecondTab> = {
  title: 'Components/SecondTab',
  component: SecondTab,
  tags: ['autodocs'],
  argTypes: {
    borderStyle: {
      options: [
        'border-solid	',
        'border-dashed	',
        'border-dotted	',
        'border-double	',
        'border-hidden	',
      ],
      control: { type: 'select' },
    },
    items: {
      control: {
        type: 'object',
      },
    },
  },
};
export default meta;

export const Primary: StoryObj<SecondTabProps> = {
  args: {
    count: 2,
    borderStyle: 'border-none',
    borderColor: 'red',
    items: [
      {
        title: 'TitleOne',
        children: <p>title ones content</p>,
      },
      {
        title: 'TitleTwo',
        children: <p>title twos content</p>,
      },
      {
        title: 'TitleThree',
        children: <p>title twos content</p>,
      },
    ],
  },
};
