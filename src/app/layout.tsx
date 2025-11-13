import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import localFont from "next/font/local";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

const clashRoyale = localFont({
    src: [
        {
            path: "./fonts/clash-regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-clash-royale",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
    title: {
        default: "Clash Royale Statistics App",
        template: "%s | Clash Royale Statistics App",
    },
    description:
        "Track, compare and analyze Clash Royale clans and players in real time.",
    openGraph: {
        title: "Clash Royale Statistics App",
        description:
            "Track, compare and analyze Clash Royale clans and players in real time.",
        url: BASE_URL,
        siteName: "Clash Royale Statistics App",
        images: [`${BASE_URL}/og-image.png`],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Clash Royale App",
        description:
            "Track, compare and analyze Clash Royale clans and players in real time.",
        images: [`${BASE_URL}/og-image.png`],
    },
    icons: {
        icon: `${BASE_URL}/favicon.ico`,
        apple: `${BASE_URL}/apple-touch-icon.png`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <body
                className={`${manrope.variable} ${clashRoyale.variable} antialiased flex min-h-full flex-col`}
            >
                <Providers>
                    <Header />
                    <main className="flex flex-col grow pb-10 bg-base-200">
                        {children}
                    </main>
                    <Footer />
                    <Toaster
                        toastOptions={{
                            style: {
                                background: "var(--color-base-100)",
                                color: "var(--color-base-content)",
                            },
                        }}
                    />
                </Providers>
            </body>
        </html>
    );
}
