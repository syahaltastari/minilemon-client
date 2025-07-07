"use client";

import { Menu } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { sidebarMenu } from "@/constant/sidebarMenu";

export default function Sidebar({ collapsed, toggleCollapsed }) {
    return (
        <aside
            className={`bg-slate-50 shadow-md transition-all duration-300 ease-in-out flex flex-col 
      ${collapsed ? "w-20" : "w-64"} hidden md:flex`}
        >
            <div className="flex items-center justify-between p-4 border-b h-16">
                <span
                    className={`text-xl font-bold origin-left transition-all duration-300 
          ${collapsed ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
                >
                    My Dashboard
                </span>
            </div>

            <nav className="flex-1 p-4 flex flex-col justify-between items-start w-full">
                <ul className="space-y-2 list-none w-full">
                    {sidebarMenu.map((item, idx) => (
                        <SidebarItem key={idx} {...item} collapsed={collapsed} />
                    ))}
                </ul>

                <button onClick={toggleCollapsed} className="p-1 rounded hover:bg-gray-100 mt-4">
                    <SidebarItem icon={<Menu size={20} />} label="" collapsed={collapsed} />
                </button>
            </nav>
        </aside>
    );
}
