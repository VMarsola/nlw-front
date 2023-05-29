// Copyright.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Hero from "./index";

const meta: Meta<typeof Hero> = {
  title: "components/Hero",
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  render: () => <Hero />,
};
