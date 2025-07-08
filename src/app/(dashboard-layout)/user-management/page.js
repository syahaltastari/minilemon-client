"use client"

import { useState, useEffect } from "react";
import Table from "@/components/table/Table";
import AddUserModal from "@/components/modals/addUserModals";
import { getUsers, addUser, deleteUser, updateUser } from "@/lib/api/userManagementService";
import toast from "react-hot-toast";

export default function UserManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [editData, setEditData] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        const res = await getUsers(page, pageSize, search);
        setUsers(res.users);
        setTotalPages(res.total_pages);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, [page, pageSize, search]);

    const handleAddUser = async (formData) => {
        const response = await addUser(formData);
        await fetchUsers();
        return response;
    };

    const handleEditUser = async (formData) => {
        const response = await updateUser(editData.id, formData);
        await fetchUsers();
        return response;
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id);
            toast.success("User deleted successfully");
            await fetchUsers();
        } catch (err) {
            toast.error(err.message || "Failed to delete user");
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow col-span-2 ">
            <div className="flex justify-between items-center py-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    className="border rounded-md py-2 px-3 outline-none"
                    placeholder="Search by name or email"
                />
                <button
                    type="button"
                    className="bg-primary py-2 px-3 rounded-md cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                >
                    Add User
                </button>
            </div>

            <Table
                data={users}
                page={page}
                pageSize={pageSize}
                totalPages={totalPages}
                onPageChange={setPage}
                onPageSizeChange={setPageSize}
                loading={loading}
                onDelete={handleDeleteUser}
                onEdit={(user) => {
                    setEditData(user);
                    setIsModalOpen(true);
                }}
            />

            <AddUserModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditData(null);
                }}
                onSubmit={editData ? handleEditUser : handleAddUser}
                isEdit={!!editData}
                initialData={editData}
            />
        </div>
    );
}
