import React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { theme } from '../src/app/_app/providers/with-theme';

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
    const { setColorScheme } = useMantineColorScheme();
    const handleColorScheme = (value: boolean) =>
        setColorScheme(value ? 'dark' : 'light');

    return <>{children}</>;
}

export const decorators = [
    (renderStory: any) => (
        <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
    ),
    (renderStory: any) => (
        <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
    ),
];
