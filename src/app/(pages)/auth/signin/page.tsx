'use client';
import { getProviders, signIn } from 'next-auth/react';

export default async function SignIn() {
    const providers = await getProviders();

    if (!providers) {
        return <div>No authentication providers found</div>;
    }

    return (
        <div>
            <h1>Sign in</h1>
            <div>
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button
                            onClick={() =>
                                signIn(provider.id, {
                                    callbackUrl: 'http://localhost:3000',
                                })
                            }
                        >
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
