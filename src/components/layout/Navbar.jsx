'use client';

import { Menu } from "lucide-react";
import LogoutCard from "../auth/LogoutCard";
import { useSession } from "next-auth/react";

export default function Navbar({ title, description, toggleMobileSidebar }) {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return null;
    }

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
            {/* Mobile Toggle */}
            <button onClick={toggleMobileSidebar} className="md:hidden">
                <Menu size={24} />
            </button>

            <div>
                <span className="text-tertiary">Welcome, </span>
                <span>{session?.user?.name || session?.user?.email || "Guest"}</span>
            </div>

            <div>
                <LogoutCard />
            </div>
        </header>
    );
}
