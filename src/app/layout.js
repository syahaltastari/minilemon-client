import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import SessionWrapper from "@/components/sessionWrapper";
// import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Minilemon App",
  description: "Manage all users in one place. Control access, asiggn roles, accross your platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <Toaster position="bottom-left" toastOptions={{ duration: 3000 }} />
        <SessionWrapper>
          {children}
        </SessionWrapper>
        {/* <AuthProvider>
        </AuthProvider> */}
      </body>
    </html>
  );
}
