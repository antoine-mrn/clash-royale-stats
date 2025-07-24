import { splitString } from "@/utils/stringMethods";
import Image from "next/image";

interface BattleResultScoreProps {
    battleType: string;
    playerScore: number;
    opponentScore: number;
}

export default function BattleResultScore({
    battleType,
    playerScore,
    opponentScore,
}: BattleResultScoreProps) {
    return (
        <article>
            <h2 className="text-center font-semibold text-2xl">
                {splitString(battleType)}
            </h2>
            <div className="flex items-center justify-center">
                <Image
                    src="/crown.png"
                    alt="Blue crown illustration"
                    width={400}
                    height={300}
                    className="w-18"
                />

                <p className="font-semibold">{playerScore}</p>
                <span className="px-1">-</span>
                <p className="font-semibold">{opponentScore}</p>
                <Image
                    src="/red-crown.png"
                    alt="Blue crown illustration"
                    width={400}
                    height={300}
                    className="w-16"
                />
            </div>
        </article>
    );
}
