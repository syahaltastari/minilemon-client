"use client";

import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { toast } from "react-hot-toast";

import { LoginSchema } from "@/lib/schemas/validationSchema";
import { login } from "@/lib/api/auth";
import InputField from "../ui/InputField";

const initialValues = {
    email: "",
    password: "",
};

export default function LoginForm() {
    const router = useRouter();

    const handleLogin = async (values, { setSubmitting }) => {
        try {
            await login(values);
            router.push("/dashboard");
        } catch (error) {
            const message = error?.message || "Something went wrong.";
            toast.error(message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
        >
            {({ isSubmitting }) => (
                <Form className="py-20 space-y-3">
                    <InputField
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Enter email address"
                        autoComplete="email"
                    />
                    <InputField
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full p-2 rounded-xl text-white mt-10 transition-all ${isSubmitting
                            ? "bg-yellow-300 cursor-not-allowed"
                            : "bg-yellow-500 hover:bg-yellow-600"
                            }`}
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </Form>
            )}
        </Formik>
    );
}