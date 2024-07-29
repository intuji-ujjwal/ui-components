import type { Meta, StoryObj } from "@storybook/react";
import { Badges, badgeVariants } from "../Badges";

const meta: Meta = {
  title: "components/Badges",
  component: Badges,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "yellow", "red", "green", "blue", "primary"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Badges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badges",
  },
};
