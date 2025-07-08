import { cookies } from "next/headers";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export async function GET() {
    const cookieHeader = cookies().toString();

    const res = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: {
            Cookie: cookieHeader,
        },
        credentials: "include",
        cache: "no-store",
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
    });
}
