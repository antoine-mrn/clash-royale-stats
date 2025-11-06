import { Arena } from "./arena";
import { Card, SupportCard, Deck } from "./card";
import { ClanPreview } from "./clan";
import { GameMode } from "./gameMode";

export interface BattleFromApi {
    arena: Arena;
    battleTime: string;
    deckSelection: string;
    gameMode: GameMode;
    isHostedMatch: boolean;
    isLadderTournament: boolean;
    leagueNumber: number;
    opponent: BattlePlayerFromApi[];
    team: BattlePlayerFromApi[];
    type: string;
}

export interface Battle {
    type: string;
    battleTime: string;
    arena: string;
    result: BattleResult;
    team: {
        crowns: number;
        player: BattlePlayer[];
    };
    opponent: {
        crowns: number;
        player: BattlePlayer[];
    };
}

// TODO: Check null for kingTowerHitPoints
export interface BattlePlayerFromApi {
    cards: Card[];
    clan: ClanPreview;
    crowns: number;
    elixirLeaked: number;
    globalRank: number | null;
    kingTowerHitPoints: number | null;
    name: string;
    princessTowerHitPoints: number | null;
    supportCards: SupportCard[];
    tag: string;
    rounds?: unknown;
    startingTrophies?: number;
    trophyChange?: number;
}

export interface BattlePlayer {
    name: string;
    tag: string;
    clanName: string;
    clanTag?: string;
    startingTrophies?: number;
    trophyChange?: number;
    deck: Deck;
    supportCard: SupportCard;
    elixirLeaked: number;
}

export type BattleResult = "win" | "lose" | "draw";
