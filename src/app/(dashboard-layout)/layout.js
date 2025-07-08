import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardShell from "@/components/layout/DashboardShell";

export default async function DashboardLayout({ children }) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        redirect("/");
    }

    return (
        <DashboardShell>
            {children}
        </DashboardShell>
    );
}
