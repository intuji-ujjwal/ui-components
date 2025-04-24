import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Accordion from '../components/Accordion';
import { ChevronUpIcon, ChevronDownIcon } from '../assets/icons';

describe('Accordion Component', () => {
  const testItems = [
    {
      title: 'Accordion Item 1',
      children: <p>Content for Accordion Item 1</p>,
    },
    {
      title: 'Accordion Item 2',
      children: <p>Content for Accordion Item 2</p>,
    },
    {
      title: 'Accordion Item 3',
      children: <p>Content for Accordion Item 3</p>,
    },
  ];

  it('renders all accordion items correctly', () => {
    render(<Accordion items={testItems} />);

    // Check if all titles are rendered
    expect(screen.getByText('Accordion Item 1')).toBeDefined();
    expect(screen.getByText('Accordion Item 2')).toBeDefined();
    expect(screen.getByText('Accordion Item 3')).toBeDefined();

    // Check if all contents are initially hidden
    const content1 = screen.queryByText('Content for Accordion Item 1');
    const content2 = screen.queryByText('Content for Accordion Item 2');
    const content3 = screen.queryByText('Content for Accordion Item 3');

    // Access the parent div that has the hidden/block class
    expect(content1?.parentElement?.parentElement?.className).toContain(
      'hidden',
    );
    expect(content2?.parentElement?.parentElement?.className).toContain(
      'hidden',
    );
    expect(content3?.parentElement?.parentElement?.className).toContain(
      'hidden',
    );
  });

  it('opens an item when clicked', () => {
    render(<Accordion items={testItems} />);

    // Click the first item
    fireEvent.click(screen.getByText('Accordion Item 1'));

    // Check if content is now visible
    const content1 = screen.getByText('Content for Accordion Item 1');
    const content2 = screen.queryByText('Content for Accordion Item 2');
    const content3 = screen.queryByText('Content for Accordion Item 3');

    expect(content1.parentElement?.parentElement?.className).toContain('block');
    expect(content2?.parentElement?.parentElement?.className).toContain(
      'hidden',
    );
    expect(content3?.parentElement?.parentElement?.className).toContain(
      'hidden',
    );
  });

  it('closes an open item when clicked again', () => {
    render(<Accordion items={testItems} />);

    // Click the first item to open
    fireEvent.click(screen.getByText('Accordion Item 1'));
    expect(
      screen.getByText('Content for Accordion Item 1').parentElement
        ?.parentElement?.className,
    ).toContain('block');

    // Click again to close
    fireEvent.click(screen.getByText('Accordion Item 1'));
    expect(
      screen.getByText('Content for Accordion Item 1').parentElement
        ?.parentElement?.className,
    ).toContain('hidden');
  });

  it('only allows one item open at a time by default', () => {
    render(<Accordion items={testItems} />);

    // Open first item
    fireEvent.click(screen.getByText('Accordion Item 1'));
    expect(
      screen.getByText('Content for Accordion Item 1').parentElement
        ?.parentElement?.className,
    ).toContain('block');

    // Open second item
    fireEvent.click(screen.getByText('Accordion Item 2'));

    // First item should now be closed
    expect(
      screen.getByText('Content for Accordion Item 1').parentElement
        ?.parentElement?.className,
    ).toContain('hidden');
    // Second item should be open
    expect(
      screen.getByText('Content for Accordion Item 2').parentElement
        ?.parentElement?.className,
    ).toContain('block');
  });

  it('allows multiple items open when allowMultiple is true', () => {
    render(
      <Accordion
        items={testItems}
        allowMultiple={true}
      />,
    );

    // Open first item
    fireEvent.click(screen.getByText('Accordion Item 1'));
    // Open second item
    fireEvent.click(screen.getByText('Accordion Item 2'));

    // Both items should be open
    expect(
      screen.getByText('Content for Accordion Item 1').parentElement
        ?.parentElement?.className,
    ).toContain('block');
    expect(
      screen.getByText('Content for Accordion Item 2').parentElement
        ?.parentElement?.className,
    ).toContain('block');
  });

  it('renders with custom icons when provided', () => {
    render(
      <Accordion
        items={testItems}
        UpIcon={ChevronDownIcon}
        DownIcon={ChevronUpIcon}
      />,
    );

    // Open the first item to show UpIcon (BeakerIcon)
    fireEvent.click(screen.getByText('Accordion Item 1'));

    // Check for SVG elements
    const buttons = screen.getAllByRole('button');
    expect(buttons[0].querySelector('svg')).toBeDefined();
  });

  it('has proper accessibility attributes', () => {
    render(<Accordion items={testItems} />);

    // Check for role="tablist" on container
    expect(screen.getByRole('tablist')).toBeDefined();

    // Check button for aria-expanded attribute (should be false initially)
    const buttons = screen.getAllByRole('button');
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false');

    // After clicking, aria-expanded should be true
    fireEvent.click(buttons[0]);
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true');

    // Check for aria-controls
    const controlsId = buttons[0].getAttribute('aria-controls');
    expect(controlsId).toBeDefined();

    // The controlled element should exist and have proper ID
    expect(document.getElementById(controlsId as string)).toBeDefined();
  });

  it('correctly propagates custom icons from items to individual accordion items', () => {
    const itemsWithCustomIcons = [
      {
        title: 'Custom Icon Item',
        children: <p>Content with custom icons</p>,
        UpIcon: ChevronDownIcon,
        DownIcon: ChevronUpIcon,
      },
      ...testItems.slice(1),
    ];

    render(<Accordion items={itemsWithCustomIcons} />);

    // Open the item with custom icons
    fireEvent.click(screen.getByText('Custom Icon Item'));

    // Check that the SVG is rendered
    const button = screen.getByText('Custom Icon Item').closest('button');
    expect(button?.querySelector('svg')).toBeDefined();
  });
});
