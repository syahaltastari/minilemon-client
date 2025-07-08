"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children, user }) => {
    const [currentUser, setCurrentUser] = useState(user);

    return <AuthContext.Provider value={{ user: currentUser, setUser: setCurrentUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);