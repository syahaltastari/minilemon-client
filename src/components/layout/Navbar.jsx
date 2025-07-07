"use client";

import { Menu } from "lucide-react";

export default function Navbar({ toggleMobileSidebar }) {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
            {/* Mobile Toggle */}
            <button onClick={toggleMobileSidebar} className="md:hidden">
                <Menu size={24} />
            </button>

            <div className="text-lg font-semibold">Dashboard</div>

            <div className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="hidden md:block px-3 py-1 border rounded"
                />
                <button className="w-8 h-8 rounded-full bg-gray-200">👤</button>
            </div>
        </header>
    );
}
