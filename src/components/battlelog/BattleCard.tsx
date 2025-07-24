import { Battle } from "@/types/battle.interface";
import Image from "next/image";
import Link from "next/link";
import DeckList from "../deck/DeckList";
import { getAverageElixir, getCycleElixirCost } from "@/utils/deckStats";
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
            <div className="flex w-full p-4">
                <BattlePlayerCard
                    battlePlayer={battle.player}
                    isOpponent={false}
                />
                <div className="divider divider-horizontal">VS</div>
                <BattlePlayerCard
                    battlePlayer={battle.opponent}
                    isOpponent={true}
                />
            </div>
        </>
    );
}
