"use client";

import { useTheme } from "./ThemeContext";

export default function ClientThemeWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const { theme } = useTheme();

    return (
        <div data-theme={theme} className="flex flex-col grow h-full">
            {children}
        </div>
    );
}
