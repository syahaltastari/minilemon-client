"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

export default function AddUserModal({
    isOpen,
    onClose,
    onSubmit,
    isEdit = false,
    initialData = null,
}) {
    if (!isOpen) return null;

    const initialValues = {
        name: initialData?.name || "",
        email: initialData?.email || "",
        password: "",
        phone_number: initialData?.phone_number || "",
        is_active: initialData?.is_active || false,
        department: initialData?.department || "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: isEdit
            ? Yup.string().min(6, "Min 6 characters")
            : Yup.string().min(6, "Min 6 characters").required("Password is required"),
        phone_number: Yup.string()
            .matches(/^\+?[0-9]+$/, "Phone number must be a valid format")
            .required("Phone number is required"),
        department: Yup.string().required("Department is required"),
    });


    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const submitData = { ...values };

            if (isEdit && !submitData.password) {
                delete submitData.password;
            }

            const response = await onSubmit(submitData);
            toast.success(response.message);
            onClose();
        } catch (err) {
            if (err.response?.data?.errors?.length > 0) {
                const formattedErrors = {};
                err.response.data.errors.forEach(error => {
                    formattedErrors[error.path] = error.msg;
                });
                setErrors(formattedErrors);
            } else {
                toast.error(err.response?.data?.message || err.message || "Something went wrong");
            }
        } finally {
            setSubmitting(false);
        }
    };



    return (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/10 flex items-center justify-center">
            <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg relative animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {isEdit ? "Edit User" : "Add New User"}
                </h2>

                <Formik
                    initialValues={initialValues}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, handleChange, setFieldValue }) => (
                        <Form className="space-y-5">
                            {[{ name: "name", type: "text", label: "Name" },
                            { name: "email", type: "email", label: "Email" },
                            { name: "password", type: "password", label: "Password" },
                            { name: "phone_number", type: "text", label: "Phone Number" }
                            ].map(({ name, type, label }) => (
                                <div key={name} className="relative">
                                    <Field
                                        name={name}
                                        type={type}
                                        placeholder=" "
                                        className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <label
                                        htmlFor={name}
                                        className="absolute left-3 top-2 text-xs text-gray-500 peer-focus:text-primary peer-focus:font-semibold transition-all"
                                    >
                                        {label}
                                    </label>
                                    <ErrorMessage
                                        name={name}
                                        component="div"
                                        className="text-sm text-red-500 mt-1"
                                    />
                                    {isEdit && name === "password" && (
                                        <p className="text-xs text-gray-500 mt-1">
                                            Leave blank to keep the current password.
                                        </p>
                                    )}
                                </div>
                            ))}

                            {/* Department */}
                            <div className="relative">
                                <Field
                                    as="select"
                                    name="department"
                                    className="w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="">Select Department</option>
                                    <option value="IT">IT</option>
                                    <option value="HR">HR</option>
                                    <option value="Finance">Finance</option>
                                </Field>
                                <label className="absolute left-3 top-2 text-xs text-gray-500">
                                    Department
                                </label>
                                <ErrorMessage
                                    name="department"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />

                            </div>

                            {/* is_active Toggle */}
                            <div className="flex items-center gap-3">
                                <label htmlFor="is_active" className="text-sm font-medium">
                                    Active Status:
                                </label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="is_active"
                                        checked={values.is_active}
                                        onChange={() =>
                                            setFieldValue("is_active", !values.is_active)
                                        }
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-tertiary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary rounded-full peer-checked:bg-primary transition-all duration-300" />
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5" />
                                </label>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition"
                                >
                                    {isEdit ? "Update User" : "Add User"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}