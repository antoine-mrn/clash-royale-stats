import { CardPreview } from "@/types/card.interface";

export const getAverageElixir = (deck: CardPreview[]): string =>
    (
        deck.reduce(
            (acc, currentValue) => acc + (currentValue.elixirCost ?? 0),
            0
        ) / deck.length
    ).toFixed(1);

export const getCycleElixirCost = (deck: CardPreview[]): string => {
    return deck
        .map((card: CardPreview) => ({
            ...card,
            elixirCost: card.elixirCost ?? 0,
        }))
        .sort((a, b) => a.elixirCost - b.elixirCost)
        .reduce((acc, currentValue, currentIndex) => {
            if (currentIndex < 5) {
                return acc + currentValue.elixirCost;
            }
            return acc;
        }, 0)
        .toFixed(1);
};
