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
                className={`flex items-center px-3 py-3 rounded w-full h-12
          transition-colors duration-200
          ${isActive ? "bg-gray-300 font-bold" : "hover:bg-gray-100"}
        `}
            >
                <span>{icon}</span>
                <span
                    className={`ml-3 transition-all duration-200 
            ${collapsed ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
                >
                    {label}
                </span>
            </Link>
        </li>
    );
}
