import { Deck } from "@/types/card.interface";
import Image from "next/image";

interface DeckStatsProps {
    averageElixir: number;
    elixirFourCardCycle: number;
    elixirLeaked?: number;
}

export default function DeckStats({
    averageElixir,
    elixirFourCardCycle,
    elixirLeaked,
}: DeckStatsProps) {
    return (
        <article className="mx-2 mt-auto mb-2 flex justify-center gap-6 bg-base-300 px-4 py-1 rounded-lg">
            <div
                className="flex items-center tooltip flex-1 justify-center"
                data-tip="Average elixir"
                aria-label={`Average elixir: ${averageElixir}`}
            >
                <p className="font-bold text-sm">{averageElixir}</p>
                <Image
                    src="/elixir.png"
                    alt="Average elixir"
                    width={288}
                    height={288}
                    className="w-8"
                />
            </div>
            <div
                className="flex items-center tooltip flex-1 justify-center"
                data-tip="Four cards cycle elixir"
                aria-label={`Four cards cycle elixir: ${elixirFourCardCycle}`}
            >
                <p className="font-bold text-sm">{elixirFourCardCycle}</p>
                <Image
                    src="/four-card-cycle.png"
                    alt="Four card cycle elixir"
                    width={288}
                    height={288}
                    className="w-8"
                />
            </div>

            {elixirLeaked && (
                <div
                    className="flex items-center tooltip flex-1 justify-center"
                    data-tip="Elixir leaked"
                    aria-label={`Elixir leaked: ${elixirLeaked}`}
                >
                    <p className="font-bold text-sm">{elixirLeaked}</p>
                    <Image
                        src="/elixir-leaked.png"
                        alt="Elixir leaked"
                        width={288}
                        height={288}
                        className="w-8"
                    />
                </div>
            )}
        </article>
    );
}
