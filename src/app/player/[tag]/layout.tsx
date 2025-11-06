import PlayerHero from "@/components/player/PlayerHero";
import PlayerTabs from "@/components/player/PlayerTabs";
import SearchForm from "@/components/search/SearchForm";
import { mapHeroBannerPlayer } from "@/lib/mapper/mapPlayer";
import { getPlayer } from "@/lib/serverMethod/player";
import { Metadata } from "next";

interface PlayerLayoutProps {
    children: React.ReactNode;
    params: Promise<{ tag: string }>;
}

export async function generatePlayerMetadata({
    params,
}: {
    params: { tag: string };
}): Promise<Metadata> {
    const player = await getPlayer(params.tag);

    if (!player) {
        return {
            title: "Player Not Found",
            description:
                "The requested Clash Royale player could not be found.",
            openGraph: {
                title: "Player Not Found",
                description:
                    "The requested Clash Royale player could not be found.",
                url: `https://url/players/${params.tag}`,
                images: ["/og-image.png"],
                locale: "en_US",
                type: "website",
            },
        };
    }

    return {
        title: `${player.name} - Clash Royale Player`,
        description: `View ${player.name}'s trophies, battle history, and ranking in Clash Royale.`,
        openGraph: {
            title: `${player.name} - Clash Royale Player`,
            description: `Detailed profile and stats for ${player.name}, including trophies, battles, and achievements.`,
            url: `https://url/players/${params.tag}`,
            images: ["/og-image.png"],
            locale: "en_US",
            type: "profile",
        },
        twitter: {
            card: "summary_large_image",
            title: `${player.name} - Clash Royale Player`,
            description: `Detailed profile and stats for ${player.name}, including trophies, battles, and achievements.`,
            images: ["/og-image.png"],
        },
    };
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
