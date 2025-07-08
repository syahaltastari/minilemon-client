import { Dialog } from "@headlessui/react";
import { Fragment } from "react";

export default function ConfirmDeleteModal({ isOpen, onClose, onConfirm, userName }) {
    return (
        <Dialog open={isOpen} onClose={onClose} as={Fragment}>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                    <Dialog.Title className="text-lg font-semibold text-gray-800 mb-2">
                        Confirm Deletion
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-gray-600 mb-4">
                        Are you sure you want to delete <strong>{userName}</strong>?
                    </Dialog.Description>
                    <div className="flex justify-end gap-3">
                        <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded cursor-pointer">
                            Cancel
                        </button>
                        <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer">
                            Delete
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}