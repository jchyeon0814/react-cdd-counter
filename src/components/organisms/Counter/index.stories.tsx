import type { Meta, StoryObj } from '@storybook/react';

import { Counter } from 'components/organisms/Counter/.';

const meta = {
  title: 'organisms/Counter',
  component: Counter,
  args: {},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
  },
};
