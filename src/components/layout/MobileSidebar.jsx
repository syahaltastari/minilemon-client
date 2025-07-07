// src/components/layout/MobileSidebar.jsx
"use client";

import { Home, User, X } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { sidebarMenu } from "@/constant/sidebarMenu";

export default function MobileSidebar({ isOpen, toggle }) {
    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={toggle}
            />

            {/* Slide-in Sidebar Drawer */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="text-xl font-bold">My Dashboard</span>
                    <button onClick={toggle}>
                        <X size={24} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <ul className="space-y-2 list-none w-full">
                        {sidebarMenu.map((item, idx) => (
                            <SidebarItem key={idx} {...item} collapsed={false} />
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
}
