// middleware.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_ROUTES = ["/"];

export async function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.cookies.get("token")?.value;

    // Allow public routes
    if (PUBLIC_ROUTES.includes(pathname)) {
        return NextResponse.next();
    }

    // Redirect to login if no token
    if (!token) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    try {
        // Verify JWT from cookie
        await jwtVerify(
            token,
            new TextEncoder().encode(process.env.JWT_SECRET)
        );
        return NextResponse.next();
    } catch (err) {
        // Token invalid/expired
        return NextResponse.redirect(new URL("/", req.url));
    }
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/user-management/:path*",
    ],
};
