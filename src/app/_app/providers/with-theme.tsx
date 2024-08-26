'use client';
import { createTheme, MantineProvider } from '@mantine/core';

interface IProps {
  children: React.ReactNode;
}

const theme = createTheme({
  /** Your theme override here */
});

export const MantineThemeProvider = ({children}: IProps) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
