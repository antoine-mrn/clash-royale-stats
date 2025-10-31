import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import { Battle } from "@/types/battle.interface";
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
        <CardContainer ariaLabelledBy="player-recenter-battles-title">
            <CardHeaderContainer>
                <CardTitle titleId="player-recenter-battles-title">
                    Recent battles
                </CardTitle>
                <Image
                    src="/crown.png"
                    alt="Battle icon"
                    className="w-10"
                    width={400}
                    height={300}
                />
            </CardHeaderContainer>

            <ul className="list">
                {battlelog.slice(0, 7).map((battle, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center p-4"
                    >
                        <div>
                            <span className="font-semibold">{battle.type}</span>
                            <span className="text-sm opacity-60">
                                {battle.battleTime} • Arena {battle.arena}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span
                                className={`badge font-semibold ${
                                    battle.result === "win"
                                        ? "bg-primary/10"
                                        : "bg-error/10"
                                }`}
                            >
                                {battle.team.crowns} - {battle.opponent.crowns}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            <Link
                href={`/player/${tag}/battlelog`}
                className="btn btn-soft btn-secondary rounded-lg mx-2 mt-auto mb-2"
            >
                View all your recent battles
            </Link>
        </CardContainer>
    );
}
