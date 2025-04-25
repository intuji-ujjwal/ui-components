import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';

const meta: Meta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    variant: {
      options: [
        'primary',
        'yellow',
        'grey',
        'red',
        'white',
        'blue',
        'greyLight',
        'whiteLight',
      ],
      control: { type: 'select' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
    },
    intent: {
      options: ['solid', 'outline', 'tertiary', 'ghost'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'button',
    className: '',
    children: 'Button',
  },
};
