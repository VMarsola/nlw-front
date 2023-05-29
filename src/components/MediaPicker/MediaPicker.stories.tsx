// Copyright.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import MediaPicker from "./index";

const meta: Meta<typeof MediaPicker> = {
  title: "components/MediaPicker",
  component: MediaPicker,
};

export default meta;
type Story = StoryObj<typeof MediaPicker>;

export const Default: Story = {
  render: () => <MediaPicker />,
};
