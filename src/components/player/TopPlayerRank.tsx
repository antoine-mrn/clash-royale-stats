import { PlayerPreview } from "@/types/player.interface";
import { getRankingBgClass } from "@/utils/rankingBgClass";
import Image from "next/image";
import Link from "next/link";
import CardContainer from "../shared/CardContainer";
import CardTitle from "../ui/CardTitle";
import { sanitizeTag } from "@/utils/stringMethods";

export default function TopPlayerRank({
    playerLeaderboard,
}: {
    playerLeaderboard: PlayerPreview[];
}) {
    return (
        <>
            <CardContainer>
                <CardTitle>Best path of Legend players 🏆</CardTitle>

                <ul className="list">
                    {playerLeaderboard.map((player) => (
                        <li key={player.tag} className="list-row">
                            <p
                                className={`mask mask-squircle text-2xl font-bold p-2 ${getRankingBgClass(
                                    player.rank
                                )}`}
                            >
                                {player.rank}
                            </p>
                            <div className="list-col-grow flex flex-col justify-center gap-2">
                                <Link
                                    href={`player/${sanitizeTag(player.tag)}`}
                                    className="font-bold link link-hover hover:link-primary"
                                >
                                    {player.name}
                                </Link>
                                {player?.clan?.name && (
                                    <p className="text-xs uppercase font-semibold opacity-60">
                                        {player?.clan?.name}
                                    </p>
                                )}
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image
                                    src="/elo.png"
                                    alt="Elo image"
                                    className="w-6"
                                    width={72}
                                    height={96}
                                />
                                <p className="font-semibold">
                                    {player.eloRating}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContainer>
        </>
    );
}
