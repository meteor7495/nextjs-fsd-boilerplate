import { NextResponse } from 'next/server';

let validToken = 'initial-valid-token'; // Initial valid token
let tokenUseCount = 0; // Simulate token expiration after 1 use

export async function GET(req: Request) {
    const authHeader = req.headers.get('authorization');
    const token = authHeader ? authHeader.split(' ')[1] : null; // Extract Bearer token

    if (token === validToken) {
        if (tokenUseCount >= 1) {
            // Simulate token expiration after 1 use
            return NextResponse.json(
                { message: 'Token expired' },
                { status: 401 },
            );
        }

        // Token is valid the first time
        tokenUseCount++;
        return NextResponse.json({
            message: 'Access granted to protected resource',
        });
    } else {
        // Invalid or missing token
        return NextResponse.json(
            { message: 'Unauthorized, invalid token' },
            { status: 401 },
        );
    }
}
