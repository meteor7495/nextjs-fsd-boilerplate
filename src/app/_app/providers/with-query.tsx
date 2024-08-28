'use client';

import { queryClient } from '@shared/lib';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface IProps {
    children: React.ReactNode;
}

export const ReactQueryProvider = ({ children }: IProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
