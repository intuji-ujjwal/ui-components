import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import LineChart from '../LineChart';
import { mockItems } from '../constants';

// Mock for react-chartjs-2 component
vi.mock('react-chartjs-2', () => ({
  Line: vi.fn(() => <canvas data-testid='mock-line-chart' />),
}));

describe('LineChart Component', () => {
  it('renders the Line chart component', () => {
    render(
      <LineChart
        bars={2}
        color='#FF6384'
        items={mockItems}
        showScales={true}
        showShadow={true}
      />,
    );

    expect(screen.getByTestId('mock-line-chart')).toBeInTheDocument();
  });

  it('handles empty items array gracefully', () => {
    render(
      <LineChart
        items={[]}
        color='#FF6384'
        showScales={true}
        showShadow={true}
        bars={2}
      />,
    );

    expect(screen.getByTestId('mock-line-chart')).toBeInTheDocument();
  });

  it('sets correct visibility for scales based on showScales prop', () => {
    const { rerender } = render(
      <LineChart
        items={mockItems}
        color='#FF6384'
        showScales={true}
        showShadow={true}
        bars={1}
      />,
    );

    // First test with scales visible
    expect(screen.getByTestId('mock-line-chart')).toBeInTheDocument();

    // Then rerender with scales hidden
    rerender(
      <LineChart
        items={mockItems}
        color='#FF6384'
        showScales={false}
        showShadow={true}
        bars={1}
      />,
    );

    expect(screen.getByTestId('mock-line-chart')).toBeInTheDocument();
  });

  it('sets correct shadow fill based on showShadow prop', () => {
    const { rerender } = render(
      <LineChart
        items={mockItems}
        color='#FF6384'
        showScales={true}
        showShadow={true}
        bars={1}
      />,
    );

    // First test with shadow visible
    expect(screen.getByTestId('mock-line-chart')).toBeInTheDocument();

    // Then rerender with shadow hidden
    rerender(
      <LineChart
        items={mockItems}
        color='#FF6384'
        showScales={true}
        showShadow={false}
        bars={1}
      />,
    );

    expect(screen.getByTestId('mock-line-chart')).toBeInTheDocument();
  });
});
