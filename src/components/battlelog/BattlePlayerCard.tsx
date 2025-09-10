import Link from "next/link";
import Image from "next/image";
import DeckList from "../deck/DeckList";
import { getAverageElixir, getCycleElixirCost } from "@/utils/deckStats";
import { BattlePlayer } from "@/types/battle.interface";
import DeckStats from "../deck/DeckStats";
import { sanitizeTag } from "@/utils/stringMethods";

interface BattlePlayerCardProps {
    battlePlayer: BattlePlayer;
    isOpponent: boolean;
}

export default function BattlePlayerCard({
    battlePlayer,
    isOpponent,
}: BattlePlayerCardProps) {
    return (
        <section
            className={`card rounded-box grid grow ${
                isOpponent ? "bg-red-50" : "bg-blue-50"
            }`}
        >
            <div
                className={`p-4 flex flex-col ${
                    isOpponent && "place-self-end items-end"
                }`}
            >
                <Link
                    href={`/player/${sanitizeTag(battlePlayer.tag)}`}
                    className="font-semibold hover:text-primary"
                >
                    {battlePlayer.name}
                </Link>
                <Link
                    href={`/clan/${battlePlayer.clanTag}`}
                    className="text-blue-500 hover:text-blue-800"
                >
                    {battlePlayer.clanName}
                </Link>
                <div className="mt-2 flex gap-2 items-center">
                    {battlePlayer.startingTrophies && (
                        <p className="text-lg font-semibold text-neutral-900">
                            {battlePlayer.startingTrophies}{" "}
                        </p>
                    )}
                    {battlePlayer.trophyChange && (
                        <span
                            className={`badge ${
                                battlePlayer.trophyChange &&
                                battlePlayer.trophyChange > 0
                                    ? "badge-primary"
                                    : "badge-error"
                            }`}
                        >
                            {battlePlayer.trophyChange &&
                                (battlePlayer.trophyChange > 0 ? "+" : "") +
                                    battlePlayer.trophyChange}
                        </span>
                    )}
                </div>
            </div>
            <DeckList
                deck={battlePlayer.cards}
                supportCard={battlePlayer.supportCard}
                className="mx-auto w-fit"
            />

            <DeckStats
                deck={battlePlayer.cards}
                elixirLeaked={battlePlayer.elixirLeaked}
            />
        </section>
    );
}
