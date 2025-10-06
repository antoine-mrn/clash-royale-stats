import { sanitizeTag } from "@/utils/stringMethods";
import Link from "next/link";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import Badge from "../ui/Badge";
import CardTitle from "../ui/CardTitle";
import RankMask from "../ui/RankMask";
import Image from "next/image";
import { CurrentRiverRaceClan } from "@/types/riverRace.interface";

export default function ClanWarRanking({
    riverRaceClans,
}: {
    riverRaceClans: CurrentRiverRaceClan[];
}) {
    return (
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
                {riverRaceClans.map((clan) => (
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
                                    href={`/clan/${sanitizeTag(clan.tag)}`}
                                    className="font-bold link link-hover hover:link-primary"
                                >
                                    {clan.name}
                                </Link>
                            </div>
                            <div className="flex gap-4">
                                <Badge
                                    badgeUrl="/period-points-icon.png"
                                    alt="Period points icon"
                                    label={clan.fame}
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
    );
}
