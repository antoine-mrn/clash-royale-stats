import { Card } from "@/types/card.interface";
import { getAverageElixir, getCycleElixirCost } from "@/utils/deckStats";
import Image from "next/image";

interface DeckStatsProps {
    deck: Card[];
    elixirLeaked?: number;
}

export default function DeckStats({ deck, elixirLeaked }: DeckStatsProps) {
    return (
        <article className="mx-2 mt-auto mb-4 flex justify-center bg-base-300 gap-6 px-4 rounded-lg">
            <div
                className="flex items-center tooltip"
                data-tip="Average elixir"
            >
                <p className="font-bold text-sm">{getAverageElixir(deck)}</p>
                <Image
                    src="/elixir.png"
                    alt="Elixir image"
                    width={288}
                    height={288}
                    className="w-10"
                />
            </div>
            <div
                className="flex items-center tooltip"
                data-tip="Four cards cycle elixir"
            >
                <p className="font-bold text-sm">{getCycleElixirCost(deck)}</p>
                <Image
                    src="/four-card-cycle.png"
                    alt="Four card cycle image"
                    width={288}
                    height={288}
                    className="w-10"
                />
            </div>

            {elixirLeaked && (
                <div
                    className="flex items-center tooltip"
                    data-tip="Elixir leaked"
                >
                    <p className="font-bold text-sm">{elixirLeaked}</p>
                    <Image
                        src="/elixir-leaked.png"
                        alt="Elixir leaked image"
                        width={288}
                        height={288}
                        className="w-10"
                    />
                </div>
            )}
        </article>
    );
}
