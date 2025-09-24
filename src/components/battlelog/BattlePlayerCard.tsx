import Link from "next/link";
import DeckList from "../deck/DeckList";
import { BattlePlayer } from "@/types/battle.interface";
import DeckStats from "../deck/DeckStats";
import { sanitizeTag } from "@/utils/stringMethods";

interface BattlePlayerCardProps {
    battlePlayer: BattlePlayer[];
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
            {battlePlayer.map((player, index) => (
                <div
                    key={index}
                    className="h-full grid grid-rows-[auto_1fr_auto]"
                >
                    <div
                        className={`p-4 flex flex-col ${
                            isOpponent && "place-self-end items-end"
                        }`}
                    >
                        <Link
                            href={`/player/${sanitizeTag(player.tag)}`}
                            className="font-semibold hover:text-primary"
                        >
                            {player.name}
                        </Link>
                        {player.clanTag ? (
                            <Link
                                href={`/clan/${sanitizeTag(player.clanTag)}`}
                                className="text-blue-500 hover:text-blue-800"
                            >
                                {player.clanName}
                            </Link>
                        ) : (
                            <p className="text-base-content/50">No clan</p>
                        )}

                        <div className="mt-2 flex gap-2 items-center">
                            {player.startingTrophies && (
                                <p className="text-lg font-semibold text-neutral-900">
                                    {player.startingTrophies}{" "}
                                </p>
                            )}
                            {player.trophyChange ? (
                                <span
                                    className={`badge ${
                                        player.trophyChange &&
                                        player.trophyChange > 0
                                            ? "badge-primary"
                                            : "badge-error"
                                    }`}
                                >
                                    {player.trophyChange &&
                                        (player.trophyChange > 0 ? "+" : "") +
                                            player.trophyChange}
                                </span>
                            ) : (
                                <span className="invisible badge">+0</span>
                            )}
                        </div>
                    </div>
                    <DeckList
                        cards={player.deck.cards}
                        supportCard={player.supportCard}
                        className="mx-auto w-fit"
                    />

                    <DeckStats
                        averageElixir={player.deck.averageElixir}
                        elixirFourCardCycle={player.deck.elixirFourCardCycle}
                        elixirLeaked={player.elixirLeaked}
                    />
                </div>
            ))}
        </section>
    );
}
