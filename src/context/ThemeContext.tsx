"use client";

import useIsMounted from "@/hooks/useIsMounted";
import { createContext, useState, useEffect, useContext } from "react";

interface ThemeContextType {
    theme: string;
    changeTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("cmyk");
    // const isMounted = useIsMounted();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem("theme") || "cmyk";
        setTheme(storedTheme);
    }, []);

    if (!isMounted) return null;

    const changeTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("ThemeProvider error");

    return context;
}
