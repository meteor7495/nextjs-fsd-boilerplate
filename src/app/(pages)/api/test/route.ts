import { NextResponse } from 'next/server';

export async function GET(req: Request): Promise<NextResponse> {
    // Set the delay duration (in milliseconds)
    const delayDuration = 2000; // 2 seconds delay

    // Create a promise that resolves after the delay
    const delayedResponse: Promise<NextResponse> = new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                NextResponse.json({
                    message: 'Click Me!',
                }),
            );
        }, delayDuration);
    });
    // Wait for the delayed promise to resolve
    return delayedResponse;
}
