import { Meta, StoryObj } from "@storybook/react";
import Payment, { PaymentProps } from "../payment/Payment";
const meta: Meta<typeof Payment> = {
  title: "Components/Payment",
  component: Payment,
  tags: ["autodocs"],
  argTypes: {
    borderStyle: {
      options: [
        "border-solid	",
        "border-dashed	",
        "border-dotted	",
        "border-double	",
        "border-hidden	",
      ],
      control: { type: "select" },
    },
    payment: {
      options: ["credit", "card"],
      control: { type: "select" },
    },
    borderColor: {
      control: { type: "color" },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<PaymentProps> = {
  args: {
    borderStyle: "border-none",
    borderColor: "red",
    payment: "credit",
    description: "Continue payment with credit balance",
    amount: 1500,
  },
};
