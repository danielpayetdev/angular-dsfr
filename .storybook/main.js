export default {
  stories: [
    "../projects/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    "name": "@storybook/angular",
    "options": {}
  },
  docs: {
    "docsPage": true
  },
  staticDirs: ["./static"],
  core: {
    builder: '@storybook/builder-webpack5',
  },
}