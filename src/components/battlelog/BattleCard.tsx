import { Battle } from "@/types/battle.interface";
import BattleResultScore from "./BattleResultScore";
import BattlePlayerCard from "./BattlePlayerCard";

export default function BattleCard({ battle }: { battle: Battle }) {
    return (
        <>
            <BattleResultScore
                battleType={battle.type}
                playerScore={battle.team.crowns}
                opponentScore={battle.opponent.crowns}
            />

            {/* Battle details */}
            <div className="flex flex-col w-full p-2 sm:flex-row">
                <BattlePlayerCard
                    battlePlayer={battle.team.player}
                    isOpponent={false}
                />
                <div className="divider sm:divider-horizontal">VS</div>
                <BattlePlayerCard
                    battlePlayer={battle.opponent.player}
                    isOpponent={true}
                />
            </div>
        </>
    );
}
