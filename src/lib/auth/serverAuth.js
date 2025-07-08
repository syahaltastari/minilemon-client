import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export async function requireAuth() {
    const cookieHeader = cookies().toString();

    try {
        const res = await fetch(`${APP_URL}/api/me`, {
            headers: {
                Cookie: cookieHeader,
            },
            cache: "no-store",
        });

        if (!res.ok) {
            console.error("Auth failed", res.status);
            redirect("/");
        }

        const data = await res.json();
        return data.user;
    } catch (err) {
        console.error("requireAuth error:", err);
        redirect("/");
    }
}
