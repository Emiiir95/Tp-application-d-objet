import { Meta, StoryObj } from '@storybook/react';

import { StorybookFormProvider } from '@/../.storybook/decorators';

import { TimeInput } from './index';

export default {
  title: 'forms/base/TimeInput',
  component: TimeInput,
  decorators: [(Story: any) => StorybookFormProvider(Story)],
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' }
    }
  }
} as Meta<typeof TimeInput>;

type Story = StoryObj<typeof TimeInput>;

export const Primary: Story = {
  args: {
    id: 'username'
  }
};
