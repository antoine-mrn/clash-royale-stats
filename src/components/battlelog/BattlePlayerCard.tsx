import DeckList from "../deck/DeckList";
import { BattlePlayer } from "@/types/battle";
import DeckStats from "../deck/DeckStats";
import TagLink from "../shared/TagLink";

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
                isOpponent ? "bg-error/10" : "bg-primary/10"
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
                        <TagLink type="player" tag={player.tag}>
                            {player.name}
                        </TagLink>
                        {player.clanTag ? (
                            <TagLink
                                type="clan"
                                tag={player.clanTag}
                                className="text-info hover:text-primary"
                            >
                                {player.clanName}
                            </TagLink>
                        ) : (
                            <p className="text-base-content/50">No clan</p>
                        )}

                        <div className="mt-2 flex gap-2 items-center">
                            {player.startingTrophies && (
                                <p
                                    className="text-lg font-semibold text-base-content"
                                    aria-label={`Starting trophies: ${player.startingTrophies}`}
                                >
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
                                    aria-label={`Trophies changes: ${player.trophyChange}`}
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
