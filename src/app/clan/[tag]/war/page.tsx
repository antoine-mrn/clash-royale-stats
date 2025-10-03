import ClanParticipant from "@/components/clanWar/clanParticipant";
import ClanWarRanking from "@/components/clanWar/ClanWarRanking";
import CardContainer from "@/components/shared/CardContainer";
import CardHeaderContainer from "@/components/shared/CardHeaderContainer";
import Badge from "@/components/ui/Badge";
import CardTitle from "@/components/ui/CardTitle";
import RankMask from "@/components/ui/RankMask";
import { getCurrentRiverRace } from "@/lib/serverMethod/clanWar";
import { sanitizeTag } from "@/utils/stringMethods";
import Image from "next/image";
import Link from "next/link";

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
            <section className="max-w-7xl space-y-8 px-6 w-full mx-auto">
                <ClanWarRanking riverRaceClans={currentRiverRace.clans} />

                <ClanParticipant myClan={myClan} />
            </section>
        </div>
    );
}
