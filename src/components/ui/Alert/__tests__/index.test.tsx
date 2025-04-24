import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Alert from '../Alert';
import { mockData } from '../constant';

describe('Alert Component', () => {
  const mockSetOpenState = vi.fn();

  beforeEach(() => {
    mockSetOpenState.mockClear();
  });

  it('renders nothing when openState is false', () => {
    const { container } = render(
      <Alert
        openState={false}
        type={mockData.type}
        setOpenState={mockSetOpenState}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  it('calls openstate to false when dismiss is clicked', () => {
    render(
      <Alert
        openState={true}
        type={mockData.type}
        setOpenState={mockSetOpenState}
      />,
    );

    const dismissButton = screen.getByText('Dismiss');
    fireEvent.click(dismissButton);

    expect(mockSetOpenState).toHaveBeenCalledTimes(1);
    expect(mockSetOpenState).toHaveBeenCalledWith(false);
  });

  it('renders title, description, link, children when provided', () => {
    render(
      <Alert
        {...mockData}
        openState={true}
        setOpenState={mockSetOpenState}
      >
        {mockData.children}
      </Alert>,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();

    const linkElement = screen.getByText('View Details');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', mockData.link);
  });
});
