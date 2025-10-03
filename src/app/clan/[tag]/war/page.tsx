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
    const myClan = currentRiverRace.clans.find((clan) => clan.isMyClan);
    console.log("🚀 ~ page ~ currentRiverRace:", myClan);

    return (
        <div className="mt-6 space-y-6">
            <section className="max-w-7xl space-y-8 px-6 w-full mx-auto">
                <CardContainer>
                    <CardHeaderContainer>
                        <CardTitle>Clan ranking</CardTitle>
                        <Image
                            src="/clan.png"
                            alt="Clan illustration"
                            width={216}
                            height={216}
                            className="w-10"
                        />
                    </CardHeaderContainer>

                    <ul className="list">
                        {currentRiverRace.clans.map((clan) => (
                            <li
                                key={clan.tag}
                                className={`list-row ${
                                    clan.isMyClan && "bg-success-content"
                                }`}
                            >
                                <RankMask rank={clan.rank} />
                                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 relative">
                                            <Image
                                                src={clan.badgeUrl}
                                                alt={`${clan.name} badge`}
                                                fill
                                                sizes="64px"
                                                className="object-contain"
                                            />
                                        </div>
                                        <Link
                                            href={`/clan/${sanitizeTag(
                                                clan.tag
                                            )}`}
                                            className="font-bold link link-hover hover:link-primary"
                                        >
                                            {clan.name}
                                        </Link>
                                    </div>
                                    <div className="flex gap-4">
                                        <Badge
                                            badgeUrl="/period-points-icon.png"
                                            alt="Period points icon"
                                            label={clan.periodPoints}
                                            badgeColor="success"
                                        />

                                        <Badge
                                            badgeUrl="/repair-icon.png"
                                            alt="Repair boat illustration"
                                            label={clan.repairPoints}
                                            badgeColor="info"
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContainer>

                <CardContainer>
                    <CardHeaderContainer>
                        <CardTitle>Participants</CardTitle>
                        <Image
                            src="/prince-lance.png"
                            alt="Prince lance illustration"
                            width={640}
                            height={640}
                            className="w-10"
                        />
                    </CardHeaderContainer>

                    <ul className="list">
                        {myClan?.participants?.map((participant, index) => (
                            <li key={participant.tag} className="list-row">
                                <RankMask rank={index + 1} />
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <Link
                                        href={`/player/${sanitizeTag(
                                            participant.tag
                                        )}`}
                                        className="font-bold link link-hover hover:link-primary"
                                    >
                                        {participant.name}
                                    </Link>
                                    <div className="flex gap-4">
                                        <Badge
                                            badgeUrl="/period-points-icon.png"
                                            alt="Period points icon"
                                            label={participant.fame}
                                            badgeColor="success"
                                        />

                                        <Badge
                                            badgeUrl="/boat-attack-icon.png"
                                            alt="Boat attack icon"
                                            label={participant.boatAttacks}
                                            badgeColor="error"
                                        />

                                        <Badge
                                            badgeUrl="/repair-icon.png"
                                            alt="Repair boat icon"
                                            label={participant.repairPoints}
                                            badgeColor="info"
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContainer>
            </section>
        </div>
    );
}
