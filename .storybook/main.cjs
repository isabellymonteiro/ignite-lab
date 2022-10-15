module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true
  },
  // for msw (mock service worker) - https://github.com/mswjs/msw-storybook-addon
  "staticDirs": [
    "../public"
  ],
  // in case I was an organization on github and needed to change the url from
  // organization/project to project (so the project name is not treated as a subdirectory)
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/sb-design-system/'
    }

    return config
  }
}