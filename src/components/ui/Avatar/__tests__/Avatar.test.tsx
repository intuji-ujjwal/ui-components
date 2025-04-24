import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';

import { Avatar } from '../Avatar';
import { mockData } from '../constant';

describe('Avatar Component', () => {
  it('renders with initials when no image source is provided', () => {
    render(<Avatar name={mockData.name} />);

    const initial = screen.getByText('J');
    expect(initial).toBeInTheDocument();
    expect(initial.parentElement).toHaveClass('bg-grey-100');
  });

  it('renders with image when image source is provided', () => {
    render(<Avatar {...mockData} />);

    const img = screen.getByAltText(mockData.name);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', mockData.imageSrc);
  });
});
