import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from './TextInput'
import { Envelope } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    // I can use [] so it doesn't have to have react fragment around it (when I used ()).
    // the react fragment appeared on "show code" in storybook. 
    // It's not a problem to use it, but it looks nicer to visualize without it.
    children: [
      <TextInput.Icon>
        <Envelope /> 
      </TextInput.Icon>,
      <TextInput.Input placeholder='Type your e-mail address' />
    ]
  },
  argTypes: {
    // just to disable the children node that appears in 'control' (not mandatory)
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder='Type your e-mail address' />
  },
}
