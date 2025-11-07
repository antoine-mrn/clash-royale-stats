import FavoritesHero from "@/components/favorites/FavoritesHero";
import SearchForm from "@/components/search/SearchForm";

interface FavoritesLayoutProps {
    children: React.ReactNode;
}

export default function FavoritesLayout({ children }: FavoritesLayoutProps) {
    return (
        <div className="mt-6 space-y-6">
            <SearchForm />

            <FavoritesHero />
            {children}
        </div>
    );
}
