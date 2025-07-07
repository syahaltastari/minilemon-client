"use client";

import { Field, ErrorMessage } from "formik";

export default function InputField({ name, type = "text", label, placeholder }) {
    return (
        <div className="py-3 flex flex-col">
            <label htmlFor={name} className="font-semibold">{label}</label>
            <Field
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className="border w-full py-2 px-3 border-gray-300 rounded-lg outline-none"
            />
            <ErrorMessage name={name} component="div" className="text-sm text-red-600" />
        </div>
    );
}
