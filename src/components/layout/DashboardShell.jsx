"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";
import { usePathname } from "next/navigation";
import { getPageMeta } from "@/lib/config/pageMeta";

export default function DashboardShell({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleSidebar = () => setCollapsed(prev => !prev);
    const toggleMobileSidebar = () => setIsMobileOpen(prev => !prev);

    const pathname = usePathname();
    const { title, description } = getPageMeta(pathname);

    return (
        <div className="h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="flex h-full">
                {/* Sidebar (Desktop) */}
                <Sidebar collapsed={collapsed} toggleCollapsed={toggleSidebar} />

                {/* Sidebar (Mobile) */}
                <MobileSidebar isOpen={isMobileOpen} toggle={toggleMobileSidebar} />

                {/* Main Area */}
                <div className="flex flex-col flex-1 w-full">
                    <Navbar title={title} description={description} toggleMobileSidebar={toggleMobileSidebar} />
                    <main className="flex-1 overflow-y-auto p-6 w-full bg-light-gray">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
