import { Meta, StoryObj } from '@storybook/react';

import Component from './index';

export default {
  title: 'organisms/PublicSidebar',
  component: Component
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    title: 'Dynamic Displays, Limitless Possibilities',
    description:
      "Unleash your digital potential with Displayeo. Our innovative platform brings unparalleled ease and flexibility to digital signage, empowering you to create captivating, engaging experiences. Transform your space and elevate your brand with Displayeo's limitless possibilities."
  }
};
