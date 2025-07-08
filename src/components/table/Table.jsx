"use client";

import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from "@tanstack/react-table";
import { Trash, Pencil } from "lucide-react";
import { useMemo } from "react";

const columnHelper = createColumnHelper();

const useColumns = (onEdit, onDelete) =>
    useMemo(
        () => [
            columnHelper.accessor("name", { header: "Name", cell: info => info.getValue() }),
            columnHelper.accessor("email", { header: "Email" }),
            columnHelper.accessor("phone_number", { header: "Phone" }),
            columnHelper.accessor("department", { header: "Department" }),
            columnHelper.accessor("is_active", {
                header: "Status",
                cell: info => (
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${info.getValue() ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                        {info.getValue() ? "Active" : "Inactive"}
                    </span>
                ),
            }),
            columnHelper.display({
                id: "actions",
                header: "Actions",
                cell: info => (
                    <div className="flex gap-x-3">
                        <Pencil size={20} onClick={() => onEdit(info.row.original)} className="text-blue-800 cursor-pointer" />
                        <Trash size={20} onClick={() => onDelete(info.row.original.id)} className="text-red-800 cursor-pointer" />
                    </div>
                ),
            }),
        ],
        [onDelete, onEdit]
    );

export default function Table({
    data = [],
    page,
    totalPages,
    pageSize,
    onPageChange,
    onPageSizeChange,
    loading = false,
    onEdit,
    onDelete
}) {
    const columns = useColumns(onEdit, onDelete);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        pageCount: totalPages,
        state: {
            pagination: {
                pageIndex: page - 1,
                pageSize: pageSize,
            },
        },
    });

    const renderSkeletonRows = () => {
        return Array.from({ length: 5 }).map((_, i) => (
            <tr key={`skeleton-${i}`}>
                {columns.map((_, j) => (
                    <td key={j} className="px-4 py-3">
                        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                    </td>
                ))}
            </tr>
        ));
    };

    const renderDataRows = () =>
        table.getRowModel().rows.map(row => (
            <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                    <td
                        key={cell.id}
                        className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap"
                    >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                ))}
            </tr>
        ));

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider bg-primary"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                    {loading ? renderSkeletonRows() : renderDataRows()}
                </tbody>
            </table>

            {!loading && data.length === 0 && (
                <div className="p-4 text-center text-sm text-gray-500">
                    No data available.
                </div>
            )}

            {/* Pagination */}
            <div className="flex justify-end items-center gap-5 p-4 text-sm">
                <button
                    onClick={() => onPageChange(page - 1)}
                    disabled={page === 1}
                    className="px-3 py-1 bg-primary rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <span className="text-gray-600">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={() => onPageChange(page + 1)}
                    disabled={page === totalPages}
                    className="px-3 py-1 bg-primary rounded disabled:opacity-50"
                >
                    Next
                </button>

                {/* Page Size Selector */}
                <div className="flex items-center gap-2">
                    <label htmlFor="pageSize">Rows per page:</label>
                    <select
                        id="pageSize"
                        value={pageSize}
                        onChange={e => {
                            onPageSizeChange(Number(e.target.value));
                            onPageChange(1); // reset to page 1
                        }}
                        className="border rounded px-2 py-1"
                    >
                        {[5, 10, 25, 50].map(size => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}