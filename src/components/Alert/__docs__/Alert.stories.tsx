import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Alert, { AlertProps } from '../Alert';

const meta: Meta<typeof Alert> = {
  title: 'components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['success', 'error', 'info', 'warning', 'default'],
      control: { type: 'select' },
    },
  },
};

export default meta;

const AlertStory: React.FC<AlertProps> = (args) => {
  const [openState, setOpenState] = useState(args.openState);
  const toggleOpenState = () => {
    setOpenState((prevOpenState) => !prevOpenState);
  };
  return (
    <Alert
      {...args}
      openState={openState}
      setOpenState={toggleOpenState}
    />
  );
};

export const Primary: StoryObj<AlertProps> = {
  args: {
    type: 'default',
    title: 'Default Alert',
    description: 'This is a default alert.',
    children: <div></div>,
    link: '',
    openState: true,
    classes: '',
    alertIcon: null,
  },
  render: (args) => <AlertStory {...args} />,
};
