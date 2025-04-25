import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import ImageComponent from '../Image';

const testSrc = 'https://example.com/test-image.jpg';

describe('Image Component', () => {
  it('renders with default props', () => {
    render(<ImageComponent />);

    const imgElement = screen.getByAltText('image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      'src',
      '../src/assets/images/placeholder-image.png',
    );
  });

  it('renders with provided src attribute', () => {
    render(<ImageComponent src={testSrc} />);

    const imgElement = screen.getByAltText('image');
    expect(imgElement).toHaveAttribute('src', testSrc);
  });
});
