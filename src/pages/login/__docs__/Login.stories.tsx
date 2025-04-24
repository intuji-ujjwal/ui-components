import { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
const meta = {
  title: 'Pages/Login',
  component: Example,
  argTypes: {
    email: {
      control: { type: 'text' },
    },
    password: {
      control: { type: 'text' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrapAssist: Story = {
  play: () => console.log('Button clicked'),
};
