import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { Button } from '../Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Default Button</Button>);

    const buttonElement = screen.getByRole('button', {
      name: 'Default Button',
    });

    expect(buttonElement).toBeInTheDocument();
  });

  it('applies custom className correctly', () => {
    render(<Button className='custom-class'>Custom Button</Button>);

    const button = screen.getByRole('button', { name: 'Custom Button' });
    expect(button).toHaveClass('custom-class');
  });

  it('passes HTML attributes to the button element', () => {
    render(
      <Button
        disabled
        aria-label='Disabled Button'
      >
        Disabled
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Disabled Button' });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-label', 'Disabled Button');
  });

  it('forwards ref to the button element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('BUTTON');
    expect(ref.current?.textContent).toBe('Ref Button');
  });

  it('handles click events correctly', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Button</Button>);

    const button = screen.getByRole('button', { name: 'Click Button' });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
