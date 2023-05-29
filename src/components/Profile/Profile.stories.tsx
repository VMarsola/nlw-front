import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Profile from "./index";
import { User } from "../../lib/auth";

export default {
  title: "Components/Profile",
  component: Profile,
} as Meta;
const mockUserData: User = {
  sub: "123",
  name: "John Doe",
  avatarUrl: "https://example.com/avatar.jpg",
};

const Template: StoryFn = () => <Profile />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => {
    return <Story />;
  },
];
