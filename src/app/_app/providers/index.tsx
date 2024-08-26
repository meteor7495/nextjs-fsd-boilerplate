'use client';

import { MantineThemeProvider } from './with-theme';
import { ReactQueryProvider } from './with-query';
import { ToastProvider } from './with-toast';

interface IProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProps) {
  return (
    <ReactQueryProvider>
      <MantineThemeProvider>
        <ToastProvider>{children}</ToastProvider>
      </MantineThemeProvider>
    </ReactQueryProvider>
  );
}
