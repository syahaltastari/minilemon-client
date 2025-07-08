import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                    });
                    const user = await res.json();
                    if (!res.ok || !user || !user.email) {
                        throw new Error(user?.message || "Invalid credentials");
                    }

                    // Return only the needed user fields
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        token: user.token,
                    };
                } catch (error) {
                    console.error("Auth error:", error);
                    return null;
                }
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.token = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.name = token.name;
            session.user.token = token.token;
            return session;
        }
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
