// DeleteMemory.stories.ts|tsx
import { rest } from "msw";

import type { Meta, StoryObj } from "@storybook/react";

import DeleteMemory from "./index";

const meta: Meta<typeof DeleteMemory> = {
  title: "components/DeleteMemory",
  component: DeleteMemory,
  parameters: {
    msw: {
      handlers: [
        rest.delete("/memories/", (req, res) => {
          return res();
        }),
      ],
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DeleteMemory>;

export const Default: Story = {
  render: () => <DeleteMemory />,
};
