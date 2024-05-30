import { Text, TextProps } from '@ignite-ui/react/src'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab explicabo quisquam minima asperiores amet saepe accusantium nihil, tempora, officia exercitationem corrupti nesciunt similique delectus necessitatibus, sit at nam numquam tenetur?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
