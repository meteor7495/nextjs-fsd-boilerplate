// lib/auth.ts
import { AuthOptions } from 'next-auth';
import { OAuthConfig } from 'next-auth/providers/oauth'; // Import the OAuthConfig type
import Providers from 'next-auth/providers';
import { OPENID_CLIENT_ID, OPENID_CLIENT_SECRET, OPENID_ISSUER } from '../..';

export const authOptions: AuthOptions = {
    debug: true,
    providers: [
        {
            id: 'openid',
            name: 'OpenID Connect',
            type: 'oauth',
            wellKnown: `${OPENID_ISSUER}/.well-known/openid-configuration`, // This automatically sets authorization, token, and userInfo endpoints
            authorization: {
                params: { scope: 'openid profile offline_access' },
            }, // Request specific scopes
            clientId: OPENID_CLIENT_ID,
            clientSecret: OPENID_CLIENT_SECRET,
            idToken: true, // Specify that you need an ID token
            checks: ['pkce', 'state'], // PKCE + state for security,

            profile(profile) {
                // Mapping OpenID Connect profile response to NextAuth session object
                return {
                    id: profile.sub,
                    name: profile.name || profile.preferred_username,
                    email: profile.email,
                    image: profile.picture,
                };
            },
        } as OAuthConfig<any>, // Cast to the OAuthConfig type
    ],
};
