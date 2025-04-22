import { Meta, StoryObj } from '@storybook/react';
import Checkout, { PaymentProps } from '../checkout/Checkout';
const meta: Meta<typeof Checkout> = {
  title: 'Components/Checkout',
  component: Checkout,
  tags: ['autodocs'],
  argTypes: {
    borderStyle: {
      options: [
        'border-solid	',
        'border-dashed	',
        'border-dotted	',
        'border-double	',
        'border-hidden	',
      ],
      control: { type: 'select' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<PaymentProps> = {
  args: {
    borderStyle: 'border-none',
    min: 0,
    max: 100,
    percentage: 40,
    color: 'red',
    items: [
      {
        subtotal: 2525.55,
        carriageCost: 0.0,
        estimatedVat: 'TBD',
        orderTotal: 2858.2,
        title: '',
      },
    ],
  },
};
