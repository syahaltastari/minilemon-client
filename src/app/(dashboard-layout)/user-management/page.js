"use client"

import { useState, useEffect } from "react";
import { PlusIcon } from "lucide-react";
import toast from "react-hot-toast";

import { getUsers, addUser, deleteUser, updateUser } from "@/lib/api/userManagementService";
import Table from "@/components/table/Table";
import AddUserModal from "@/components/modals/addUserModals";
import ConfirmDeleteModal from "@/components/modals/confirmDeleteModal";

export default function UserManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
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

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setConfirmDeleteOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await deleteUser(selectedUser.id);
            toast.success("User deleted");
            fetchUsers();
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to delete user");
        } finally {
            setConfirmDeleteOpen(false);
        }
    };

    return (
        <main className="min-h-[85vh] bg-white p-4 rounded-lg shadow col-span-2">
            <h1 className="text-2xl">List Users</h1>
            <div className="flex flex-col-reverse items-start gap-4 md:flex-row md:justify-between md:items-center py-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    className="border rounded-md py-2 px-3 outline-none border-tertiary"
                    placeholder="Search by name or email"
                />
                <button
                    type="button"
                    className="bg-primary py-2 px-3 rounded-md cursor-pointer flex items-center gap-x-1"
                    onClick={() => setIsModalOpen(true)}
                >
                    <PlusIcon size={20} />
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
                onDelete={handleDeleteClick}
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

            <ConfirmDeleteModal
                isOpen={confirmDeleteOpen}
                onClose={() => setConfirmDeleteOpen(false)}
                onConfirm={handleConfirmDelete}
                userName={selectedUser?.name}
            />
        </main>
    );
}