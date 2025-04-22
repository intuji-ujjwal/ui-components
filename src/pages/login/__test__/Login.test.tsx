import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Login from '../Login';

describe('Login', () => {
  it('should render the logo and name of the app', () => {
    const { container } = render(<Login />);
    const logo = container.querySelector(
      "[aria-label='scrap_assist_logo'] > svg",
    );
    expect(logo).not.toBeNull();
    const name = container.querySelector("[aria-label='srap_assist_title']");
    expect(name?.textContent).toContain('Scrap Assist');
  });
});
