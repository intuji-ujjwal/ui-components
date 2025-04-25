import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';

import InputField from '../InputField';

const TestWrapper = ({ children, defaultValues = {} }) => {
  const methods = useForm({ defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('InputField Component', () => {
  it('renders text input field correctly', () => {
    render(
      <TestWrapper>
        <InputField
          type='text'
          name='username'
          label='Username'
          placeholder='Enter username'
        />
      </TestWrapper>,
    );

    const labelElement = screen.getByText('Username');
    const inputElement = screen.getByPlaceholderText('Enter username');

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it('shows required asterisk when requirement is true', () => {
    render(
      <TestWrapper>
        <InputField
          type='text'
          requirement={true}
          name='required_field'
          label='Required Field'
        />
      </TestWrapper>,
    );

    const asterisk = screen.getByText('*');
    expect(asterisk).toBeInTheDocument();
    expect(asterisk).toHaveClass('requirement');
  });
});
