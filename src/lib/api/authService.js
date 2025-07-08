
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function login(values) {
    try {
        const res = await fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
            credentials: "include",
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.message || "Login failed");
        }

        return data;
    } catch (err) {
        console.error("Login error:", err);
        throw err;
    }
}

export async function logout() {
    try {
        const res = await fetch(`${API_BASE_URL}/auth/logout`, {
            method: "POST",
            credentials: "include",
        });

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Logout failed: ${res.status} - ${errorText}`);
        }

        return true;
    } catch (err) {
        console.error("Logout error:", err);
        throw err;
    }
}