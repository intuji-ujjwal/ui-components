import type { Meta, StoryObj } from "@storybook/react";
import { Badges } from "../Badges";

const meta: Meta = {
  title: "components/Badges",
  component: Badges,
  tags: ["autodocs"],
  args: { variant: "green" },
  argTypes: {
    variant: {
      options: ["default", "yellow", "red", "green", "blue", "primary"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Badges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Green: Story = {
  args: {
    children: "Badges",
  },
};
