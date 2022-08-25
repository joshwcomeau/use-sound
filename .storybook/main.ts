import path from "path";
import type { StorybookViteConfig } from "@storybook/builder-vite"

const config: StorybookViteConfig = {
  features: {
    storyStoreV7: true
  },
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    "@storybook/addon-links",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        global: "window",
      },
      resolve: {
        alias: [
          {
            find: "@",
            replacement: path.resolve(
              __dirname,
              ".."
            ),
          },
        ],
      },
    };
  },
};

module.exports = config;
