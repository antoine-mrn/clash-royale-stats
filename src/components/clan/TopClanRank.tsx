import { ClanLeaderboard } from "@/types/clan.interface";
import Image from "next/image";
import Link from "next/link";
import CardTitle from "../ui/CardTitle";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import RankMask from "../ui/RankMask";
import { sanitizeTag } from "@/utils/stringMethods";

export default function TopClanRank({
    clanLeaderboard,
}: {
    clanLeaderboard: ClanLeaderboard[];
}) {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <CardTitle>Clan statistics</CardTitle>
                <Image
                    src="/clan.png"
                    alt="Clan illustration"
                    width={216}
                    height={216}
                    className="w-10"
                />
            </CardHeaderContainer>

            <ul className="list">
                {clanLeaderboard.map((clan) => (
                    <li key={clan.tag} className="list-row">
                        <RankMask rank={clan.rank} />
                        <div className="list-col-grow flex flex-col justify-center gap-2">
                            <Link
                                href={`clan/${sanitizeTag(clan.tag)}`}
                                className="font-bold link link-hover hover:link-primary"
                            >
                                {clan.name}
                            </Link>
                            <p className="text-xs uppercase font-semibold opacity-60">
                                {clan.members} members
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image
                                src="/clanwars-trophy.png"
                                alt="Elo image"
                                className="w-6"
                                width={19}
                                height={20}
                            />
                            <p className="font-semibold">{clan.clanScore}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </CardContainer>
    );
}
