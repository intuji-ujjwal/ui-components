import { Meta, StoryObj } from "@storybook/react";
import { CartItems, cartTableProps } from "../CartItemsList/CartItems";
const meta: Meta<typeof CartItems> = {
  title: "Components/CartItems",
  component: CartItems,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Primary: StoryObj<cartTableProps> = {
  args: {
    desiredRows: 2,
    items: [
      {
        size: 6,
        leadTime: "5 - 7 Days (Est. 17th Mar, 2024)",
        itemStatus: "badge",
        quantity: 7,
        orderQuantity: 5,
        amount: 232499,
        returnInfo: "dsfsfsfsfsfsfsfsf",
      },
      {
        size: 6,
        leadTime: "5 - 7 Days (Est. 17th Mar, 2024)",
        itemStatus: "badge",
        quantity: 7,
        orderQuantity: 5,
        amount: 232499,
        returnInfo: "dsfsfsfsfsfsfsfsf",
      },
      {
        size: 6,
        leadTime: "5 - 7 Days (Est. 17th Mar, 2024)",
        itemStatus: "badge",
        quantity: 7,
        orderQuantity: 5,
        amount: 232499,
        returnInfo: "dsfsfsfsfsfsfsfsf",
      },

      {
        size: 6,
        leadTime: "5 - 7 Days (Est. 17th Mar, 2024)",
        itemStatus: "badge",
        quantity: 7,
        orderQuantity: 5,
        amount: 232499,
        returnInfo: "dsfsfsfsfsfsfsfsf",
      },
    ],
    returnOrder: false,
  },
};
