import { requireAuth } from "@/lib/auth/serverAuth";
import { AuthProvider } from "@/contexts/AuthContext";
import DashboardShell from "@/components/layout/DashboardShell";

export default async function DashboardLayout({ children }) {
    const user = await requireAuth();
    return (
        <AuthProvider user={user}>
            <DashboardShell>{children}</DashboardShell>
        </AuthProvider>
    );
}
