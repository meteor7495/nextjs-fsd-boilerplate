import { NextResponse } from 'next/server';

let validToken = 'initial-valid-token'; // Initial valid token
let newToken = 'new-valid-token'; // New token after refresh

export async function POST(req: Request) {
    const body = await req.json();
    const { token } = body;

    if (token === validToken) {
        // Simulate returning a new valid token after refresh
        validToken = newToken; // Update valid token
        return NextResponse.json({ newToken });
    } else {
        // Token refresh failed
        return NextResponse.json(
            { message: 'Token refresh failed, invalid token' },
            { status: 401 },
        );
    }
}
