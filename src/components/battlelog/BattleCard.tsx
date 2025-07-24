import { Battle } from "@/types/battle.interface";
import BattleResultScore from "./BattleResultScore";
import BattlePlayerCard from "./BattlePlayerCard";

export default function BattleCard({ battle }: { battle: Battle }) {
    return (
        <>
            <BattleResultScore
                battleType={battle.type}
                playerScore={battle.playerScore}
                opponentScore={battle.opponentScore}
            />

            {/* Battle details */}
            <div className="flex flex-col w-full p-4 sm:flex-row">
                <BattlePlayerCard
                    battlePlayer={battle.player}
                    isOpponent={false}
                />
                <div className="divider sm:divider-horizontal">VS</div>
                <BattlePlayerCard
                    battlePlayer={battle.opponent}
                    isOpponent={true}
                />
            </div>
        </>
    );
}
