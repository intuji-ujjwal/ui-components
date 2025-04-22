import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from '../radioDesign';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Radio Button',
  component: RadioButton,
  tags: ['autodocs'],
} as Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const PrimaryToggle: Story = {
  args: {
    label: 'Default',
    checked: false,
    disabled: false,
    focus: (event) => {
      event.target.checked = true;
    },
  },
};
