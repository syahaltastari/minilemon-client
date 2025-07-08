"use client";
import Link from "next/link";

export default function DashboardClient() {
    return (
        <main className="min-h-[85vh] bg-gradient-to-br from-white via-gray-50 to-gray-100 flex flex-col items-center justify-center px-6 py-16 rounded-xl">
            {/* Hero Section */}
            <section className="max-w-3xl text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                    Welcome to <span className="text-primary">MiniLemon</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    A modern and efficient user management platform built to scale with your organization.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href={'/user-management'} className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition">
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Features Preview (Optional) */}
            <section id="features" className="mt-24 w-full max-w-5xl">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
                    Why MiniLemon?
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            title: "User Management",
                            desc: "Add, edit, and delete users with ease using intuitive interface.",
                        },
                        {
                            title: "Secure & Scalable",
                            desc: "Built with Next.js and Express, system ensures performance and security.",
                        },
                        {
                            title: "Modern Design",
                            desc: "Sleek, responsive UI with Tailwind CSS and best practices in mind.",
                        },
                    ].map((f, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                            <p className="text-sm text-gray-600">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
