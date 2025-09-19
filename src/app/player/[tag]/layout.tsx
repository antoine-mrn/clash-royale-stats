import PlayerHero from "@/components/player/PlayerHero";
import PlayerTabs from "@/components/player/PlayerTabs";
import SearchForm from "@/components/search/SearchForm";
import { mapHeroBannerPlayer } from "@/lib/mapper/mapPlayer";
import { getPlayer } from "@/lib/serverMethod/player";

interface PlayerLayoutProps {
    children: React.ReactNode;
    params: Promise<{ tag: string }>;
}

export default async function playerLayout({
    children,
    params,
}: PlayerLayoutProps) {
    const { tag } = await params;
    const player = await getPlayer(tag);
    const playerHeroBanner = mapHeroBannerPlayer(player);

    return (
        <div className="mt-6 space-y-6">
            <SearchForm />

            <div>
                <PlayerHero
                    name={playerHeroBanner.name}
                    level={playerHeroBanner.level}
                    tag={playerHeroBanner.tag}
                    clanName={playerHeroBanner.clan.name}
                    clanTag={playerHeroBanner.clan.tag}
                />
                <PlayerTabs tag={tag} />
            </div>
            {children}
        </div>
    );
}
