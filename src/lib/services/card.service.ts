export const rarityOffset: Record<string, number> = {
    common: 0,
    rare: 2,
    epic: 5,
    legendary: 8,
    champion: 10,
};

export const getNewLevel = (level: number, rarity: string): number => {
    const offset = rarityOffset[rarity] ?? 0;
    return level + offset;
};
