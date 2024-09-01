import { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return <Story />;
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
