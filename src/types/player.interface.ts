import { Achievement, Badge, BadgePreview } from "./achievement.interface";
import { Arena } from "./arena.interface";
import { Card, SupportCard } from "./card.interface";
import { ClanPreview } from "./clan.interface";
import { Icon } from "./icon.interface";
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

export interface PlayerFromApi {
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

export interface Player {
    name: string;
    level: number;
    tag: string;
    wins: number;
    losses: number;
    battleCount: number;
    threeCrownWins: number;
    starPoint: number;
    totalExpPoints: number;
    challengeMaxWins: number;
    challengeCardsWon: number;
    lastPathOfLegendSeasonResult: PathOfLegendResult;
    bestPathOfLegendSeasonResult: PathOfLegendResult;
    clan: {
        clanName?: string;
        role: string;
        donations: number;
        donationsReceived: number;
        totalDonations: number;
        warDayWins: number;
    };
    badges: BadgePreview[];
    deck: {
        iconUrls: Icon;
        elixirCost: number;
    }[];
}
