'use client';

import { MantineThemeProvider } from './with-theme';
import { ReactQueryProvider } from './with-query';
import { ToastProvider } from './with-toast';
import { SessionProvider } from 'next-auth/react';

interface IProps {
    children: React.ReactNode;
}

export function Providers({ children }: IProps) {
    return (
        <SessionProvider>
            <ReactQueryProvider>
                <MantineThemeProvider>
                    <ToastProvider>{children}</ToastProvider>
                </MantineThemeProvider>
            </ReactQueryProvider>
        </SessionProvider>
    );
}
