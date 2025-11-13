import ClanDescription from "@/components/clan/ClanDescription";
import ClanInfo from "@/components/clan/ClanInfo";
import ClanMembers from "@/components/clan/ClanMembers";
import { getClan } from "@/lib/serverMethod/clan";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;
    const clan = await getClan(tag);

    return (
        <div className="mt-6 space-y-6">
            <section className="max-w-7xl grid grid-cols-1 justify-center gap-8 px-2 w-full mx-auto md:grid-cols-2 md:px-6">
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
