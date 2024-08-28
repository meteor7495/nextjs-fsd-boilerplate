import { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { MantineProvider } from '@mantine/core';

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            document.documentElement.classList.add('dark');
            return (
                <MantineProvider>
                    <Story />
                </MantineProvider>
            );
        },
    ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BrandColors: Story = {
    render: () => <Button>Default</Button>,
    parameters: {
        docs: {
            source: {
                // Override the source code to display a simplified version
                code: '<Button>Default</Button>',
            },
        },
    },
};
