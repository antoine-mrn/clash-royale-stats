import { Badge, Achievement, BadgePreview } from "./achievement";
import { Arena } from "./arena";
import { Card, SupportCard, Deck, SupportCardPreview } from "./card";
import { ClanPreview, ClanRole } from "./clan";
import { PathOfLegendResult } from "./result";
import { statistics } from "./statistics";

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
    progress: unknown;
}

export interface Player {
    name: string;
    level: number;
    tag: string;
    wins: number;
    losses: number;
    battleCount: number;
    threeCrownWins: number;
    winRate: string;
    starPoints: number;
    totalExpPoints: number;
    challengeMaxWins: number;
    challengeCardsWon: number;
    lastPathOfLegendSeasonResult: PathOfLegendResult;
    bestPathOfLegendSeasonResult: PathOfLegendResult;
    currentPathOfLegendSeasonResult: PathOfLegendResult;
    clan: {
        name: string | null;
        tag: string | null;
    };
    role: string;
    donations: number;
    donationsReceived: number;
    totalDonations: number;
    warDayWins: number;
    badges: BadgePreview[];
    currentDeck: Deck;
    currentDeckSupportCards: SupportCardPreview;
}

export interface PlayerHeroBanner {
    tag: string;
    name: string;
    clan: { name: string | null; tag: string | null };
    level: number;
}

export interface PlayerBattleStats {
    wins: number;
    losses: number;
    threeCrownWins: number;
    battleCount: number;
    winRate: string;
}
export interface ClanMemberFromApi {
    arena: Arena;
    clanChestPoints: number;
    clanRank: number;
    donations: number;
    donationsReceived: number;
    expLevel: number;
    lastSeen: string;
    name: string;
    previousClanRank: number;
    role: ClanRole;
    tag: string;
    trophies: number;
}

export interface ClanMember {
    clanRank: number;
    donations: number;
    donationsReceived: number;
    expLevel: number;
    lastSeen: string;
    name: string;
    role: ClanRole;
    tag: string;
    trophies: number;
}
