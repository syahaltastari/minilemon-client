export const pageMeta = {
    "/home": { title: "Home", description: "" },
    "/user-management": { title: "User Management", description: "Manage all users in one place. accross your platform." },
    "*": { title: "Minilemon App" },
};

export function getPageMeta(pathname) {
    return (
        pageMeta[pathname] ||
        Object.entries(pageMeta).find(([key]) => pathname.startsWith(key))?.[1] ||
        pageMeta["*"]
    );
}