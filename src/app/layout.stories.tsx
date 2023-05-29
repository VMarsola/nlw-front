import type { Meta, StoryObj } from "@storybook/react";

import Layout from "./layout";

const meta: Meta<typeof Layout> = {
  title: "Pages/Layout",
  component: Layout,
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
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  render: () => <Layout children={<></>} />,
};
