"use client";

import { LayoutPanelLeft } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { sidebarMenu } from "@/constant/sidebarMenu";
import Image from "next/image";

export default function Sidebar({ collapsed, toggleCollapsed }) {
    return (
        <aside
            className={`shadow-md transition-all duration-300 ease-in-out flex flex-col ${collapsed ? "w-20" : "w-64"} hidden md:flex`}
        >
            <div className="flex items-center justify-between p-4 h-16">
                <Image
                    src={'/image/logo.png'}
                    width={80}
                    height={38}
                    alt="Minilemon Logo"
                />
            </div>

            <nav className="flex-1 p-4 flex flex-col justify-between items-start w-full">
                <ul className="space-y-2 list-none w-full">
                    {sidebarMenu.map((item, idx) => (
                        <SidebarItem key={idx} {...item} collapsed={collapsed} />
                    ))}
                </ul>

                <button onClick={toggleCollapsed} className="flex items-center justify-center p-3 hover:bg-secondary rounded-xl h-12 self-end cursor-pointer">
                    <LayoutPanelLeft size={20} className="" />
                </button>
            </nav>
        </aside>
    );
}
