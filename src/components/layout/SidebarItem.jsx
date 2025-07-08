"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({ icon, label, collapsed, location = "#" }) {
    const pathname = usePathname();
    // Check if this item is the active route
    const isActive = pathname.startsWith(location);
    return (
        <li className="list-none w-full">
            <Link
                href={location}
                className={`flex items-center px-3 py-3 rounded-xl w-full h-12
                transition-colors duration-200
                ${isActive ? " bg-primary text-slate-700 border border-primary font-semibold shadow" : "hover:bg-amber-100 hover:text-slate-600 text-tertiary"}
                `}
            >
                <span>{icon}</span>
                <span
                    className={`ml-3 transition-all duration-200 
                    ${collapsed ? "opacity-0 scale-0" : "opacity-100 scale-100"} whitespace-nowrap`}
                >
                    {label}
                </span>
            </Link>
        </li>
    );
}
