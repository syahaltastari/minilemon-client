import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_ROUTES = ["/"];

function isPublicRoute(pathname) {
    return PUBLIC_ROUTES.includes(pathname);
}

async function verifyToken(token) {
    try {
        const { payload } = await jwtVerify(
            token,
            new TextEncoder().encode(process.env.JWT_SECRET)
        );
        return payload;
    } catch {
        return null;
    }
}

export async function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.cookies.get("token")?.value;

    // Allow access to public routes without token
    if (isPublicRoute(pathname)) {
        return NextResponse.next();
    }

    // If no token, redirect to login
    if (!token) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    // If token exists, verify it
    const isValid = await verifyToken(token);
    if (!isValid) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    // Authenticated and authorized
    return NextResponse.next();
}

// Define which routes the middleware applies to
export const config = {
    matcher: [
        "/home/:path*",
        "/user-management/:path*",
    ],
};