import { Box, Text } from '@junior-ui/react'
import { CheckBox, CheckBoxProps } from '@junior-ui/react/src'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'fex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Except term of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}
