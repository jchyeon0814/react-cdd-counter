import type { Meta, StoryObj } from '@storybook/react';

import { CounterApp } from 'components/templates/CounterApp';

const meta = {
    title: 'templates/CounterApp',
    component: CounterApp,
    args: {

    },
} satisfies Meta<typeof CounterApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    },
};