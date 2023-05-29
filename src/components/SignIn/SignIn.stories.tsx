// Copyright.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import SignIn from "./index";

const meta: Meta<typeof SignIn> = {
  title: "components/SignIn",
  component: SignIn,
};

export default meta;
type Story = StoryObj<typeof SignIn>;

export const Default: Story = {
  render: () => <SignIn />,
};
