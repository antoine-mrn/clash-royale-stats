import { CurrentRiverRaceParticipant } from "@/types/riverRace.interface";
import RankMask from "../ui/RankMask";
import Link from "next/link";
import { sanitizeTag } from "@/utils/stringMethods";
import Badge from "../ui/Badge";

export default function ClanParticipantList({
    clanParticipant,
}: {
    clanParticipant: CurrentRiverRaceParticipant[] | undefined;
}) {
    return (
        <ul className="list">
            {clanParticipant?.map((participant, index) => (
                <li key={participant.tag} className="list-row">
                    <RankMask rank={index + 1} />
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <Link
                            href={`/player/${sanitizeTag(participant.tag)}`}
                            className="font-bold link link-hover hover:link-primary"
                        >
                            {participant.name}
                        </Link>
                        <div className="flex flex-wrap gap-2 sm:gap-4">
                            <Badge
                                badgeUrl="/period-points-icon.png"
                                alt="Period points icon"
                                label={participant.fame}
                                badgeColor="success"
                            />

                            <Badge
                                badgeUrl="/cards-icon.png"
                                alt="Cards icon"
                                label={participant.decksUsed}
                                badgeColor="accent"
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
    );
}
