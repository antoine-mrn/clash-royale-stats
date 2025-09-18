import ClanDescription from "@/components/clan/ClanDescription";
import ClanHero from "@/components/clan/ClanHero";
import ClanInfo from "@/components/clan/ClanInfo";
import ClanMembers from "@/components/clan/ClanMembers";
import SearchForm from "@/components/search/SearchForm";
import { getClan } from "@/lib/serverMethod/clan";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;
    const clan = await getClan(tag);
    console.log("🚀 ~ page ~ clan:", clan);

    return (
        <div className="mt-6 space-y-6">
            <SearchForm />

            <ClanHero
                name={clan.name}
                tag={clan.tag}
                clanWarTrophies={clan.clanWarTrophies}
            />

            <section className="max-w-7xl grid justify-center gap-8 px-6 w-full mx-auto md:grid-cols-2">
                <ClanInfo
                    clanScore={clan.clanScore}
                    clanWarTrophies={clan.clanWarTrophies}
                    donationsPerWeek={clan.donationsPerWeek}
                    requiredTrophies={clan.requiredTrophies}
                    type={clan.type}
                    locationName={clan.locationName}
                />

                <ClanDescription description={clan.description} />
                <ClanMembers
                    memberList={clan.memberList}
                    memberCount={clan.members}
                />
            </section>
        </div>
    );
}
