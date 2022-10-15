import { themes } from '@storybook/theming'
import { initialize, mswDecorator } from 'msw-storybook-addon'

import '../src/styles/global.css'

// https://github.com/mswjs/msw-storybook-addon
// Initialize MSW
// initialize can be empty '()'
initialize({
  // if I pass the line below it won't log (web console) requisitions not treated with msw
  onUnhandledRequest: 'bypass'
})

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator]

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
  }
}