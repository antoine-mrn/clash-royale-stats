import ClanHero from "@/components/clan/ClanHero";
import ClanTabs from "@/components/clan/ClanTabs";
import SearchForm from "@/components/search/SearchForm";
import { mapHeroBannerClan } from "@/lib/mapper/mapClan";
import { getClan } from "@/lib/serverMethod/clan";
import { Metadata } from "next";

interface ClanLayoutProps {
    children: React.ReactNode;
    params: Promise<{ tag: string }>;
}

export async function generateClanMetadata({
    params,
}: {
    params: { tag: string };
}): Promise<Metadata> {
    const clan = await getClan(params.tag);

    if (!clan) {
        return {
            title: "Clan Not Found",
            description: "The requested Clash Royale clan could not be found.",
            openGraph: {
                title: "Clan Not Found",
                description:
                    "The requested Clash Royale clan could not be found.",
                // url: `https://URL/clans/${params.tag}`,
                images: ["/og-image.png"],
                locale: "en_US",
                type: "website",
            },
        };
    }

    return {
        title: `${clan.name} - Clash Royale Clan`,
        description: `View ${clan.name}'s members, trophies, clan war stats, and more.`,
        openGraph: {
            title: `${clan.name} - Clash Royale Clan`,
            description: `Detailed profile and stats for ${clan.name}, including members, clan wars, trophies, and achievements.`,
            url: `https://clashroyaleapp.com/clans/${params.tag}`,
            images: ["/og-image.png"],
            locale: "en_US",
            type: "profile",
        },
        twitter: {
            card: "summary_large_image",
            title: `${clan.name} - Clash Royale Clan`,
            description: `Detailed profile and stats for ${clan.name}, including members, clan wars, trophies, and achievements.`,
            images: ["/og-image.png"],
        },
    };
}

export default async function clanLayout({
    children,
    params,
}: ClanLayoutProps) {
    const { tag } = await params;
    const clan = await getClan(tag);
    const clanHeroBanner = mapHeroBannerClan(clan);

    return (
        <div className="mt-6 space-y-6">
            <SearchForm />

            <div>
                <ClanHero
                    name={clanHeroBanner.name}
                    badgeUrl={clanHeroBanner.badgeUrl}
                    tag={clanHeroBanner.tag}
                    clanWarTrophies={clanHeroBanner.clanWarTrophies}
                />

                <ClanTabs tag={tag} />
            </div>

            {children}
        </div>
    );
}
