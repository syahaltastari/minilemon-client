"use client";
import { useAuth } from "@/contexts/AuthContext";

export default function DashboardClient() {
    const { user } = useAuth();
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Welcome {user.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow">📈 Chart / Stat Card</div>
                <div className="bg-white p-4 rounded shadow">💼 Recent Projects</div>
                <div className="bg-white p-4 rounded shadow">📅 Calendar / Schedule</div>
            </div>
        </div>
    );
}
