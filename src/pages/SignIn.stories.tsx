import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import SignIn from './SignIn'

export default {
  title: 'Page/Sign in',
  component: SignIn,
  args: {},
  argTypes: {},
  // https://github.com/mswjs/msw-storybook-addon
  parameters: {
    msw: {
      handlers: [
        rest.post('sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'You are logged in!'
          }))
        })
      ]
    }
  }
} as Meta

// https://storybook.js.org/addons/@storybook/addon-interactions
// no need to have unit test (spec) and storybook test at the same time
export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('janedoe@example.com'), 'isabelly@gmail.com')
    userEvent.type(canvas.getByPlaceholderText('******'), '123456')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('You are logged in!')).toBeInTheDocument()
    })
  }
}
