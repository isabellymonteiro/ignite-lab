import { Meta, StoryObj } from '@storybook/react'
import Heading from './Heading'
import { HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading as h1 tag</h1>
    )
  },
  argTypes: {
    // just to disable the children node that appears in 'control' (not mandatory)
    children: {
      control: {
        type: null
      }
    },
    // to disable the user option (true or false) as they should not be able to change it in this case
    asChild: {
      control: {
        type: null
      }
    }
  }
}
