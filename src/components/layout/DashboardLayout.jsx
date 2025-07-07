// src/components/layout/DashboardLayout.jsx
"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";

export default function DashboardLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleSidebar = () => setCollapsed(prev => !prev);
    const toggleMobileSidebar = () => setIsMobileOpen(prev => !prev);

    return (
        <div className="h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="flex h-full">
                {/* Sidebar (Desktop) */}
                <Sidebar collapsed={collapsed} toggleCollapsed={toggleSidebar} />

                {/* Sidebar (Mobile) */}
                <MobileSidebar isOpen={isMobileOpen} toggle={toggleMobileSidebar} />

                {/* Main Area */}
                <div className="flex flex-col flex-1 w-full">
                    {/* Navbar */}
                    <Navbar toggleMobileSidebar={toggleMobileSidebar} />

                    {/* Page Content */}
                    <main className="flex-1 overflow-y-auto p-6 w-full">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
