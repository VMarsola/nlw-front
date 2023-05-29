// Copyright.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Copyright from "./index";

const meta: Meta<typeof Copyright> = {
  title: "components/Copyright",
  component: Copyright,
};

export default meta;
type Story = StoryObj<typeof Copyright>;

export const Default: Story = {
  render: () => <Copyright />,
};
