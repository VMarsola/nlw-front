// Copyright.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import EmptyMemories from "./index";

const meta: Meta<typeof EmptyMemories> = {
  title: "components/EmptyMemories",
  component: EmptyMemories,
};

export default meta;
type Story = StoryObj<typeof EmptyMemories>;

export const Default: Story = {
  render: () => <EmptyMemories />,
};
