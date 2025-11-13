import ClanParticipant from "@/components/clanWar/ClanParticipant";
import ClanWarRanking from "@/components/clanWar/ClanWarRanking";
import { getCurrentRiverRace } from "@/lib/serverMethod/clanWar";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;
    const currentRiverRace = await getCurrentRiverRace(tag);
    const myClan =
        currentRiverRace.clans.find((clan) => clan.isMyClan) ?? undefined;

    return (
        <div className="mt-6 space-y-6">
            <section className="max-w-7xl space-y-8 px-2 w-full mx-auto md:px-6">
                <ClanWarRanking riverRaceClans={currentRiverRace.clans} />

                <ClanParticipant myClan={myClan} />
            </section>
        </div>
    );
}
