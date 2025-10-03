import { sanitizeTag } from "@/utils/stringMethods";
import Link from "next/link";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import Badge from "../ui/Badge";
import CardTitle from "../ui/CardTitle";
import RankMask from "../ui/RankMask";
import Image from "next/image";
import { CurrentRiverRaceClan } from "@/types/riverRace.interface";

export default function ClanParticipant({
    myClan,
}: {
    myClan: CurrentRiverRaceClan | undefined;
}) {
    return (
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
                                href={`/player/${sanitizeTag(participant.tag)}`}
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
    );
}
