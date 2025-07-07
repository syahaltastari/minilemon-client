"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

export default function HomePage() {
    return (
        <DashboardLayout>
            <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow">📈 Chart / Stat Card</div>
                <div className="bg-white p-4 rounded shadow">💼 Recent Projects</div>
                <div className="bg-white p-4 rounded shadow">📅 Calendar / Schedule</div>
            </div>
        </DashboardLayout>
    );
}
