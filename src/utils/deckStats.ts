import { Card } from "@/types/card.interface";

// TODO: Fixed le nombre de décimale
export const getAverageElixir = (deck: Card[]): string =>
    (
        deck.reduce((acc, currentValue) => acc + currentValue.elixirCost, 0) /
        deck.length
    ).toFixed(1);

export const getCycleElixirCost = (deck: Card[]): string => {
    return (deck.sort((a, b) => a.elixirCost - b.elixirCost) || [])
        .reduce((acc, currentValue, currentIndex) => {
            if (currentIndex < 5) {
                return acc + currentValue.elixirCost;
            }
            return acc;
        }, 0)
        .toFixed(1);
};
