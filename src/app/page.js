"use client";

import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";
import SideBanner from "@/components/auth/SideBanner";

export default function LoginPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="py-20 px-5 lg:flex lg:py-0 lg:px-0 min-h-screen max-h-screen overflow-hidden">
        <section className="basis-[60%] lg:px-10 lg:flex lg:items-center lg:w-full">
          <Image
            src="/image/logo.png"
            alt="Logo Minilemon app"
            width={80}
            height={38}
            className="absolute top-4 left-4"
          />

          <div className="min-w-[50%] mx-auto">
            <h1 className="font-bold text-center lg:text-3xl">Login to Dashboard</h1>
            <p className="text-center text-sm text-gray-500 mt-2">Fill the form below to login</p>

            <LoginForm />

            <footer className="mt-10 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600">
              Made with ☕ by Syahal Tastari 🐺
            </footer>
          </div>
        </section>
        <SideBanner />
      </main>
    </div>
  );
}
