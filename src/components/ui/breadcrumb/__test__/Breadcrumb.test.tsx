import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { mockPath } from '../constant';
import Breadcrumbs from '../Breadcrumb';

export const mockProps = {
  path: mockPath,
  onClick: vi.fn(),
  title: 'User Profile',
  previcon: <span data-testid='prev-icon'>←</span>,
};

describe('Breadcrumb Component', () => {
  it('renders the title correctly', () => {
    render(<Breadcrumbs title={mockProps.title} />);

    const titleElement = screen.getByText('User Profile');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders path items correctly', () => {
    render(
      <Breadcrumbs
        title={mockProps.title}
        path={mockProps.path}
      />,
    );

    const homeLink = screen.getByText('Home');
    const dashboardLink = screen.getByText('Dashboard');

    expect(homeLink).toBeInTheDocument();
    expect(dashboardLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute('href', '/');
    expect(dashboardLink).toHaveAttribute('href', '/dashboard');
  });

  it('renders previcon and calls onClick when clicked', () => {
    render(
      <Breadcrumbs
        title={mockProps.title}
        previcon={mockProps.previcon}
        onClick={mockProps.onClick}
      />,
    );

    const prevIcon = screen.getByTestId('prev-icon');
    expect(prevIcon).toBeInTheDocument();

    fireEvent.click(prevIcon.parentElement as HTMLElement);
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders children correctly', () => {
    render(
      <Breadcrumbs title='Test'>
        <button data-testid='child-button'>Action</button>
      </Breadcrumbs>,
    );

    const childButton = screen.getByTestId('child-button');
    expect(childButton).toBeInTheDocument();
  });
});
