import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-primary/60 via-primary/40 to-info/50 backdrop-blur-md shadow-md">
            <nav className="navbar max-w-7xl mx-auto px-3 sm:px-6">
                <Link href="/" className="flex items-center gap-2 flex-1">
                    <Image
                        src="/logo.png"
                        alt="Logo Clash Royale dashboard"
                        width={72}
                        height={72}
                        className="rounded-xl"
                    />
                    <span className="text-lg font-clash-royale font-semibold text-primary-content hidden sm:inline drop-shadow-sm">
                        Clash Royale Stats
                    </span>
                </Link>

                <Link
                    href="/favorites"
                    className="btn bg-primary rounded-lg text-primary-content hover:bg-primary-focus hover:text-white border-none transition-colors"
                    title="Voir mes favoris"
                >
                    <Star className="h-5 w-5" />
                    <span className="hidden sm:inline font-medium">
                        Favorites
                    </span>
                </Link>
                <ThemeToggle className="ml-4" />
            </nav>
        </header>
    );
}
