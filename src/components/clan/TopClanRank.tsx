import { ClanLeaderboard } from "@/types/clan.interface";
import Image from "next/image";
import CardTitle from "../ui/CardTitle";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import RankMask from "../ui/RankMask";
import TagLink from "../shared/TagLink";

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
                            <TagLink
                                type="clan"
                                tag={clan.tag}
                                aria-label={`View clan ${clan.name}`}
                            >
                                {clan.name}
                            </TagLink>
                            <p className="text-xs uppercase font-semibold opacity-60">
                                {clan.members} members
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image
                                src="/clanwars-trophy.png"
                                alt="Elo image"
                                className="w-6"
                                width={113}
                                height={122}
                            />
                            <p className="font-semibold">{clan.clanScore}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </CardContainer>
    );
}
