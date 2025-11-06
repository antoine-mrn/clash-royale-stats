import FavoritesHero from "@/components/favorites/FavoritesHero";
import SearchForm from "@/components/search/SearchForm";
import { Metadata } from "next";

interface FavoritesLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Favorites",
    description:
        "Track and manage your favorite Clash Royale players and clans.",
    openGraph: {
        title: "Favorites",
        description:
            "Track and manage your favorite Clash Royale players and clans.",
        url: "https://clashroyaleapp.com/favorites",
        images: ["/og-image.png"],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Favorites",
        description:
            "Track and manage your favorite Clash Royale players and clans.",
        images: ["/og-image.png"],
    },
};

export default function FavoritesLayout({ children }: FavoritesLayoutProps) {
    return (
        <div className="mt-6 space-y-6">
            <SearchForm />

            <FavoritesHero />
            {children}
        </div>
    );
}
