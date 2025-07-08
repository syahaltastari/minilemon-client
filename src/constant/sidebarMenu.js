import { Home, User } from "lucide-react";

export const sidebarMenu = [
    {
        icon: <Home size={20} />,
        label: "Dashboard",
        location: "/dashboard",
    },
    {
        icon: <User size={20} />,
        label: "User Management",
        location: "/user-management",
    },
];
