export const getAverageElixir = (deck: (number | undefined)[]): number => {
    return parseFloat(
        (
            deck.reduce(
                (acc: number, currentValue: number | undefined) =>
                    acc + (currentValue ?? 0),
                0
            ) / deck.length
        ).toFixed(1)
    );
};

export const getCycleElixirCost = (deck: (number | undefined)[]): number => {
    return parseFloat(
        deck
            .map((card: number | undefined) => ({
                elixirCost: card ?? 0,
            }))
            .sort((a, b) => a.elixirCost - b.elixirCost)
            .reduce((acc, currentValue, currentIndex) => {
                if (currentIndex < 5) {
                    return acc + currentValue.elixirCost;
                }
                return acc;
            }, 0)
            .toFixed(1)
    );
};
