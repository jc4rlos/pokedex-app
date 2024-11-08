import type { Meta, StoryObj } from "@storybook/react";

import Badge from "./Badge";
import { userEvent, within } from "@storybook/test";

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fire: Story = {
  args: {
    type: "fire",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText("fire");
    await userEvent.hover(badge);
  },
};

export const Electric: Story = {
  args: {
    type: "electric",
  },
};
