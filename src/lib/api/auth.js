export const login = async (values) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");

    return data;
};