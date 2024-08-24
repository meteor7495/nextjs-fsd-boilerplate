"use client";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
    /** Your theme override here */
});

export function withTheme(children: React.ReactNode) {
    return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
