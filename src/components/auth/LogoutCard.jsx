"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { logout } from "@/lib/api/authService";

export default function LogoutCard() {
    const { user } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout();
            toast.success("Successfully logged out");
            router.push("/");
        } catch (err) {
            console.error("Logout error:", err.message || err);
            toast.error("Logout failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-between rounded-xl bg-white w-full">
            <div className="flex items-center gap-3">
                
            </div>
            <button
                onClick={handleLogout}
                className="hover:bg-gray-100 rounded-full p-1 transition"
                aria-label="Logout"
            >
                <LogOut className="w-5 h-5 text-gray-600" />
            </button>
        </div>
    );
}
