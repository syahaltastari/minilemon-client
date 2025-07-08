const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUsers(page = 1, limit = 10, search) {
    try {
        const res = await fetch(`${API_BASE_URL}/users?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`, {
            method: "GET",
            credentials: "include",
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.message || "Failed to fetch users");
        }

        return data;
    } catch (err) {
        console.error("Get users error:", err);
        throw err;
    }
}

export async function addUser(values) {
    const res = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message || "Failed to add user");
        error.response = {
            data: {
                message: data.message,
                errors: data.errors || [],
            },
        };
        throw error;
    }

    return data;
}



export async function updateUser(id, values) {
    try {
        const res = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
            credentials: "include",
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.message || "Failed to update user");
        }

        return data;
    } catch (err) {
        console.error("Update user error:", err);
        throw err;
    }
}

export async function deleteUser(id) {
    try {
        const res = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: "DELETE",
            credentials: "include",
        });

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Delete failed: ${res.status} - ${errorText}`);
        }

        return true;
    } catch (err) {
        console.error("Delete user error:", err);
        throw err;
    }
}