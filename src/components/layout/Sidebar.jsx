"use client";

import { Menu } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { sidebarMenu } from "@/constant/sidebarMenu";
import LogoutCard from "../auth/LogoutCard";
import Image from "next/image";

export default function Sidebar({ collapsed, toggleCollapsed }) {
    return (
        <aside
            className={`bg-primary shadow-md transition-all duration-300 ease-in-out flex flex-col ${collapsed ? "w-20" : "w-64"} hidden md:flex`}
        >
            <div className="flex items-center justify-between p-4 h-16">
                <Image
                    src={'/image/logo.png'}
                    width={80}
                    height={38}
                />
            </div>

            <nav className="flex-1 p-4 flex flex-col justify-between items-start w-full">
                <ul className="space-y-2 list-none w-full">
                    {sidebarMenu.map((item, idx) => (
                        <SidebarItem key={idx} {...item} collapsed={collapsed} />
                    ))}
                </ul>

                <div className="w-full">
                    <button onClick={toggleCollapsed} className="p-1 rounded hover:bg-gray-100 mt-4">
                        <SidebarItem icon={<Menu size={20} />} label="" collapsed={collapsed} />
                    </button>
                    <LogoutCard />
                </div>
            </nav>
        </aside>
    );
}
