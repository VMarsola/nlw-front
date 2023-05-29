// Copyright.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import NewMemoryForm from "./index";

const meta: Meta<typeof NewMemoryForm> = {
  title: "components/NewMemoryForm",
  component: NewMemoryForm,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewMemoryForm>;

export const Default: Story = {
  render: () => <NewMemoryForm />,
};
