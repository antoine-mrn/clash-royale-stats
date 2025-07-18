import playerBattlelog from "@/lib/serverMethod/playerBattlelog";
import { splitString } from "@/utils/stringMethods";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import { Battle } from "@/types/battle.interface";
import { formatDate } from "@/utils/dateMethods";
import Link from "next/link";

interface PlayerRecentBattlePreviewProps {
    battlelog: Battle[];
    tag: string;
}

export default function PlayerRecentBattlePreview({
    battlelog,
    tag,
}: PlayerRecentBattlePreviewProps) {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <CardTitle>Recent battles</CardTitle>
                <Image
                    src="/crown.png"
                    alt="Battle icon"
                    className="w-10"
                    width={400}
                    height={300}
                />
            </CardHeaderContainer>

            <ul className="list">
                {battlelog.slice(0, 5).map((battle) => (
                    <li
                        key={battle.battleTime}
                        className="flex justify-between items-center p-4"
                    >
                        <div>
                            <p className="font-semibold">
                                {splitString(battle.type)}
                            </p>
                            <p className="text-sm opacity-60">
                                {formatDate(battle.battleTime)} • Arena{" "}
                                {battle.arena.name}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span
                                className={`badge font-semibold ${
                                    battle.team[0].crowns >
                                    battle.opponent[0].crowns
                                        ? "bg-green-600"
                                        : "bg-red-600"
                                }`}
                            >
                                {battle.team[0].crowns} -{" "}
                                {battle.opponent[0].crowns}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            <Link
                href={`/player/${tag}/battlelog`}
                className="btn btn-soft btn-secondary mx-2 mt-auto mb-2"
            >
                View all your recent battles
            </Link>
        </CardContainer>
    );
}
