import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import InputField from '../InputField';

const meta: Meta<typeof InputField> = {
  title: 'components/Input Field',
  component: InputField,
  decorators: [
    (Story) => {
      const methods = useForm({ mode: 'onTouched' });
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
  argTypes: {
    type: {
      options: ['text', 'email', 'password', 'url', 'number', 'date', 'search'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const EmailInput: Story = {
  args: {
    type: 'email',
    requirement: true,
    placeholder: '',
    name: 'inputName',
    label: 'Input Label',
    max_width: 0,
    minHeight: 0,
    rules: {
      required: 'This field is required',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'Invalid email address',
      },
    },
  },
  render: (args) => <InputField {...args} />,
};
export const PasswordInput: Story = {
  args: {
    type: 'password',
    requirement: true,
    placeholder: '',
    name: 'inputName',
    label: 'Input Label',
    max_width: 0,
    minHeight: 0,
  },
  render: (args) => <InputField {...args} />,
};
export const TextInput: Story = {
  args: {
    type: 'text',
    requirement: true,
    placeholder: '',
    name: 'inputName',
    label: 'Input Label',
    max_width: 0,
    minHeight: 0,
    rules: {
      required: 'This field is required',
      pattern: {
        value: /^[a-zA-Z\s]*$/,
        message: 'Invalid value',
      },
    },
  },
  render: (args) => <InputField {...args} />,
};
export const UrlInput: Story = {
  args: {
    type: 'url',
    requirement: true,
    placeholder: '',
    name: 'inputName',
    label: 'Input Label',
    max_width: 0,
    minHeight: 0,
    rules: {
      required: 'This field is required',
      pattern: {
        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
        message: 'Invalid url address',
      },
    },
  },
  render: (args) => <InputField {...args} />,
};
export const NumberInput: Story = {
  args: {
    type: 'number',
    requirement: true,
    placeholder: '',
    name: 'inputName',
    label: 'Input Label',
    max_width: 0,
    minHeight: 0,
    rules: {
      required: 'This field is required',
      pattern: {
        value: /^^\d+(\.\d+)?$/,
        message: 'Invalid number',
      },
    },
  },
  render: (args) => <InputField {...args} />,
};
export const SearchInput: Story = {
  args: {
    type: 'search',
    requirement: false,
    placeholder: '',
    name: 'inputName',
    label: 'Input Label',
    max_width: 0,
    minHeight: 0,
    // rules: {
    //   required: "This field is required",
    // },
  },
  render: (args) => <InputField {...args} />,
};
export const DateInput: Story = {
  args: {
    type: 'date',
    requirement: false,
    placeholder: '',
    name: 'inputName',
    label: 'Input Label',
    max_width: 0,
    minHeight: 0,
    // rules: {
    //   required: "This field is required",
    // },
  },
  render: (args) => <InputField {...args} />,
};
