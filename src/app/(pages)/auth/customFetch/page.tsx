'use client';

import { useEffect, useState } from 'react';
import { customFetch } from '@shared/api';

export default function Home() {
    const [data, setData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Call custom fetch on component mount to access protected resource
        customFetch('/api/auth/protected')
            .then((data: any) => {
                console.log({ data });
                setData(data.message);
            })
            .catch((err: any) => {
                console.log({ err });
                setError(err.message);
            });
    }, []);

    return (
        <div>
            <h1>Protected API Call</h1>
            {data && <p>Data: {data}</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
}
