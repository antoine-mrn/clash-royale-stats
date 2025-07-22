import { Achievement, Badge } from "./achievement.interface";
import { Arena } from "./arena.interface";
import { Card, SupportCard } from "./card.interface";
import { ClanPreview } from "./clan.interface";
import { PathOfLegendResult } from "./result.interface";
import { statistics } from "./statistics.interface";

export interface PlayerPreview {
    clan?: ClanPreview;
    tag: string;
    name: string;
    expLevel: number;
    rank: number;
    eloRating: number;
}

export interface Player {
    clan?: ClanPreview;
    legacyTrophyRoadHighScore: number;
    currentDeck: Card[];
    currentDeckSupportCards: SupportCard[];
    arena: Arena;
    role: string;
    wins: number;
    losses: number;
    totalDonations: number;
    leagueStatistics: statistics;
    cards: Card[];
    supportCards: SupportCard[];
    currentFavouriteCard: Card;
    badges: Badge[];
    tag: string;
    name: string;
    expLevel: number;
    trophies: number;
    bestTrophies: number;
    donations: number;
    donationsReceived: number;
    achievements: Achievement[];
    battleCount: number;
    threeCrownWins: number;
    challengeCardsWon: number;
    challengeMaxWins: number;
    tournamentCardsWon: number;
    tournamentBattleCount: number;
    warDayWins: number;
    clanCardsCollected: number;
    starPoints: number;
    expPoints: number;
    totalExpPoints: number;
    currentPathOfLegendSeasonResult: PathOfLegendResult;
    lastPathOfLegendSeasonResult: PathOfLegendResult;
    bestPathOfLegendSeasonResult: PathOfLegendResult;
    progress: any;
}

// TODO: Check null for kingTowerHitPoints
export interface BattlePlayer {
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
