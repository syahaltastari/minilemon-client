"use client";

import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

import { LoginSchema } from "@/lib/schemas/validationSchema";
import InputField from "../ui/InputField";

const initialValues = {
    email: "",
    password: "",
};

export default function LoginForm() {
    const router = useRouter();

    const handleLogin = async (values, { setSubmitting }) => {
        const res = await signIn("credentials", {
            redirect: false,
            email: values.email,
            password: values.password,
        });

        if (res.ok) {
            toast.success("Login successful!");
            router.push("/home");
        } else {
            toast.error(res.error || "Invalid email or password.");
        }

        setSubmitting(false);
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