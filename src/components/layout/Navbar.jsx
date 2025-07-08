"use client";

import { Menu } from "lucide-react";
import LogoutCard from "../auth/LogoutCard";

export default function Navbar({ title, description, toggleMobileSidebar }) {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
            {/* Mobile Toggle */}
            <button onClick={toggleMobileSidebar} className="md:hidden">
                <Menu size={24} />
            </button>

            <div>
                <span className="text-tertiary">Welcome, </span> 
                <span>Syahal Tastari</span>
            </div>

            <div>
                <LogoutCard />
            </div>
        </header>
    );
}