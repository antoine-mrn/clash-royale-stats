import { Clan } from "@/types/clan.interface";
import { getRankingBgClass } from "@/utils/rankingBgClass";
import Image from "next/image";
import Link from "next/link";
import CardListWrapper from "../shared/CardListWrapper";
import CardTitle from "../ui/CardTitle";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";

export default function TopClanRank({
    clanLeaderboard,
}: {
    clanLeaderboard: Clan[];
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
                        <p
                            className={`mask mask-squircle text-2xl font-bold p-2 ${getRankingBgClass(
                                clan.rank
                            )}`}
                        >
                            {clan.rank}
                        </p>
                        <div className="list-col-grow flex flex-col justify-center gap-2">
                            <Link
                                href={`clan/${clan.tag}`}
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
