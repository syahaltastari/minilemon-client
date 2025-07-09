"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { signOut } from "next-auth/react";

import ConfirmLogoutModal from "../modals/confirmLogutModal";

export default function LogoutCard() {
    const router = useRouter();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleLogout = async () => {
        try {
            await signOut({
                callbackUrl: '/',
            });
            router.push("/");
            toast.success("Successfully logged out");
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
                onClick={() => setModalIsOpen(true)}
                className="hover:bg-gray-100 rounded-full p-1 transition cursor-pointer"
                aria-label="Logout"
            >
                <LogOut className="w-6 h-6 text-gray-600" />
            </button>

            <ConfirmLogoutModal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                onConfirm={handleLogout}
            />
        </div>
    );
}
