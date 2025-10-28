"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem={true}
            value={{
                light: "cmyk",
                dark: "night",
            }}
        >
            {children}
        </ThemeProvider>
    );
}
