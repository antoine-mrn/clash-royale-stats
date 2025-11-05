import { PlayerPreview } from "@/types/player.interface";
import Image from "next/image";
import Link from "next/link";
import CardContainer from "../shared/CardContainer";
import CardTitle from "../ui/CardTitle";
import { sanitizeTag } from "@/utils/stringMethods";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import RankMask from "../ui/RankMask";
import TagLink from "../shared/TagLink";

export default function TopPlayerRank({
    playerLeaderboard,
}: {
    playerLeaderboard: PlayerPreview[];
}) {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <CardTitle>Previous season leaderboard</CardTitle>
                <Image
                    src="/assets/battle.webp"
                    alt="Battle swords illustration"
                    width={128}
                    height={128}
                    className="w-10"
                />
            </CardHeaderContainer>

            <ul className="list">
                {playerLeaderboard.map((player) => (
                    <li key={player.tag} className="list-row">
                        <RankMask rank={player.rank} />
                        <div className="list-col-grow flex flex-col justify-center gap-2">
                            <TagLink
                                type="player"
                                tag={player.tag}
                                aria-label={`View profile of ${player.name}`}
                            >
                                {player.name}
                            </TagLink>

                            {/* TODO: Voir pour ce lien */}
                            {player?.clan?.name && (
                                <Link
                                    href={`clan/${sanitizeTag(
                                        player.clan?.tag
                                    )}`}
                                    className="text-xs uppercase font-semibold opacity-60"
                                    aria-label={`View clan ${player.clan.name}`}
                                >
                                    {player?.clan?.name}
                                </Link>
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
                            <p className="font-semibold">{player.eloRating}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </CardContainer>
    );
}
