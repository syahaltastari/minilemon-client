import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getCurrentUser } from "../api/authService";

export async function requireAuth() {
    const cookieHeader = cookies().toString();
    const user = await getCurrentUser(cookieHeader);

    if (!user) {
        redirect("/");
    }

    return user;
}