import { themes } from "@storybook/theming";
import { cookieDecorator } from "storybook-addon-cookie";
import { initialize, mswDecorator } from "msw-storybook-addon";
import "../src/app/globals.css";
initialize();

export const decorators = [mswDecorator, cookieDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
