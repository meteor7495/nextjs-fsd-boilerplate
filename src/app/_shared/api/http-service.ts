import { API_URL } from '../utils';

let isRefreshing: boolean = false;
let subscribers: Array<(token: string) => void> = [];
let currentToken: string = 'initial-valid-token';

function onTokenRefreshed(newToken: string): void {
    subscribers.forEach((callback) => callback(newToken));
    subscribers = [];
}

function addSubscriber(callback: (token: string) => void): void {
    console.log({ subscribers });
    subscribers.push(callback);
}

async function refreshToken(): Promise<string> {
    const res = await fetch('/api/auth/refresh-token', {
        method: 'POST',
        body: JSON.stringify({ token: currentToken }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
        throw new Error('Failed to refresh token');
    }

    const data: { newToken: string } = await res.json();
    return data.newToken;
}

export async function customFetch(
    url: string,
    options: RequestInit = {},
): Promise<any> {
    options.headers = options.headers ? options.headers : {};

    if (options.headers instanceof Headers) {
        options.headers.set('Authorization', `Bearer ${currentToken}`);
    } else {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${currentToken}`,
        } as Record<string, string>;
    }

    try {
        const response: Response = await fetch(url, options);
        console.log({ response });
        if (response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true;

                try {
                    const newToken: string = await refreshToken();
                    console.log({ newToken });
                    currentToken = newToken;
                    onTokenRefreshed(newToken);
                } catch (error) {
                    throw error;
                } finally {
                    isRefreshing = false;
                }
            }

            return new Promise((resolve) => {
                addSubscriber((newToken: string) => {
                    if (options.headers instanceof Headers) {
                        options.headers.set(
                            'Authorization',
                            `Bearer ${newToken}`,
                        );
                    } else {
                        (options.headers as Record<string, string>)[
                            'Authorization'
                        ] = `Bearer ${newToken}`;
                    }
                    resolve(fetch(url, options).then((res) => res.json()));
                });
            });
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
