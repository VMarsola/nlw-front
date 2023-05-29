import type { Meta, StoryObj } from "@storybook/react";
import NewPage from "./page";

const meta: Meta<typeof NewPage> = {
  title: "Pages/NewPage",
  component: NewPage,
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
type Story = StoryObj<typeof NewPage>;

export const Default: Story = {
  render: () => <NewPage />,
};
