import { Text, TextProps } from '@ignite-ui/react/src'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab explicabo quisquam minima asperiores amet saepe accusantium nihil, tempora, officia exercitationem corrupti nesciunt similique delectus necessitatibus, sit at nam numquam tenetur?',
  },
  argTypes: {
    variant: {
      size: {
        options: [
          'xxs',
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
          '8xl',
          '9xl',
        ],
      },
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
