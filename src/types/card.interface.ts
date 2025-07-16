import { Icon } from "./icon.interface";
import { Rarity } from "./rarity.enum";

export interface Card {
    count: number;
    elixirCost: number;
    evolutionLevel?: number;
    iconUrls: Icon;
    id: number;
    level: number;
    maxEvolutionLevel: number;
    maxLevel: number;
    name: string;
    rarity: Rarity;
    starLevel: number;
}

export type SupportCard = Pick<
    Card,
    "id" | "name" | "rarity" | "iconUrls" | "level" | "maxLevel" | "count"
>;
