import { Story, Meta } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title default',
    description: 'Default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const Default: Story = (args) => <Main {...args} />
