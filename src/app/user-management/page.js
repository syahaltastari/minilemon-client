"use client";

import mockDataUser from "@/constant/mockDataUser";
import Table from "@/components/table/Table"
import DashboardLayout from "@/components/layout/DashboardLayout";
export default function HomePage() {
    return (
        <DashboardLayout>
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            <div className="grid">
                <div className="bg-white p-4 rounded shadow col-span-2">
                    <p className="text-lg py-2">Manage all users in one place. Control access, asiggn roles, accross your platform.</p>
                    <div className="flex justify-between  p-4">
                        <div>
                            <input type="text" className="border rounded-md py-2 px-3 outline-none" placeholder="Search" />
                        </div>
                        <div>
                            <button className="bg-yellow-500 py-2 px-3 rounded-md text-white cursor-pointer">Add User</button>
                        </div>
                    </div>

                    <Table data={mockDataUser} />
                </div>
            </div>
        </DashboardLayout>

    );
}