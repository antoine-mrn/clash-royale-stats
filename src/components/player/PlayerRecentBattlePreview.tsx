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
                {battlelog.slice(0, 5).map((battle, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center p-4"
                    >
                        <div>
                            <p className="font-semibold">{battle.type}</p>
                            <p className="text-sm opacity-60">
                                {battle.battleTime} • Arena {battle.arena}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span
                                className={`badge font-semibold ${
                                    battle.isWinner ? "bg-blue-50" : "bg-red-50"
                                }`}
                            >
                                {battle.playerScore} - {battle.opponentScore}
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
