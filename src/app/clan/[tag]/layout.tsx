import ClanHero from "@/components/clan/ClanHero";
import ClanTabs from "@/components/clan/ClanTabs";
import SearchForm from "@/components/search/SearchForm";
import { mapHeroBannerClan } from "@/lib/mapper/mapClan";
import { getClan } from "@/lib/serverMethod/clan";

interface ClanLayoutProps {
    children: React.ReactNode;
    params: Promise<{ tag: string }>;
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
