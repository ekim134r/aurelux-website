import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Get country from Vercel headers or fallback
    // @ts-expect-error - geo is a Vercel-specific extension to NextRequest
    const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || 'US';

    // Set cookie for client-side access (not HttpOnly so JS can read it)
    response.cookies.set('aurelux-geo-country', country, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'lax',
    });

    return response;
}

export const config = {
    // Run on all routes except static assets and API
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|images/).*)',
    ],
};
