import { Battle } from "@/types/battle.interface";
import BattleResultScore from "./BattleResultScore";
import BattlePlayerCard from "./BattlePlayerCard";
import CardContainer from "../shared/CardContainer";

export default function BattleCard({ battle }: { battle: Battle }) {
    return (
        <CardContainer className="py-4">
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
        </CardContainer>
    );
}
