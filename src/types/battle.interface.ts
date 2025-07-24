import { Arena } from "./arena.interface";
import { Card, SupportCard } from "./card.interface";
import { ClanPreview } from "./clan.interface";
import { GameMode } from "./gameMode.interface";

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
    playerScore: number;
    opponentScore: number;
    isWinner: boolean;
    player: BattlePlayer;
    opponent: BattlePlayer;
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
    rounds?: any;
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
    cards: Card[];
    supportCard: SupportCard;
    elixirLeaked: number;
}
