import { PlayerBattleStats } from "@/types/player.interface";
import PlayerWinLossChart from "../charts/PlayerWinLossChart";
import PlayerWinRateChart from "../charts/PlayerWinRateChart";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";

interface PlayerPerformanceProps {
    playerStats: PlayerBattleStats;
}

export default function PlayerPerformance({
    playerStats,
}: PlayerPerformanceProps) {
    return (
        <CardContainer
            ariaLabelledBy="player-performance-title"
            className="w-full h-[500px] sm:h-[350px]"
        >
            <CardHeaderContainer>
                <CardTitle titleId="player-performance-title">
                    Performance
                </CardTitle>
                <Image
                    src="/assets/king-chesscheck.webp"
                    alt="King holding chess piece illustration"
                    width={128}
                    height={128}
                    className="w-10"
                />
            </CardHeaderContainer>

            <article className="w-full h-full flex flex-col justify-center items-center sm:flex-row">
                <PlayerWinLossChart playerStats={playerStats} />
                <PlayerWinRateChart playerStats={playerStats} />
            </article>
        </CardContainer>
    );
}
