export enum RiverRaceState {
    CLAN_NOT_FOUND = "CLAN_NOT_FOUND",
    ACCESS_DENIED = "ACCESS_DENIED",
    MATCHMAKING = "MATCHMAKING",
    MATCHED = "MATCHED",
    FULL = "FULL",
    ENDED = "ENDED",
}

export enum RiverRacePeriodType {
    TRAINING = "TRAINING",
    WAR_DAY = "WAR_DAY",
    COLOSSEUM = "COLOSSEUM",
}

export interface RiverRaceParticipant {
    tag: string;
    name: string;
    fame: number;
    repairPoints: number;
    boatAttacks: number;
    decksUsed: number;
    decksUsedToday: number;
}

export interface RiverRaceClan {
    tag: string;
    clanScore: number;
    badgeId: number;
    name: string;
    fame: number;
    repairPoints: number;
    finishTime: string;
    participants: RiverRaceParticipant[];
    periodPoints: number;
}

export interface PeriodLogEntryClan {
    tag: string;
}

export interface PeriodLogEntry {
    clan: PeriodLogEntryClan;
    pointsEarned: number;
    progressStartOfDay: number;
    progressEndOfDay: number;
    endOfDayRank: number;
    progressEarned: number;
    numOfDefensesRemaining: number;
    progressEarnedFromDefenses: number;
}

export interface PeriodLog {
    items: PeriodLogEntry[];
    periodIndex: number;
}

export interface CurrentRiverRaceFromApi {
    state: RiverRaceState;
    clan: RiverRaceClan;
    clans: RiverRaceClan[];
    collectionEndTime: string;
    warEndTime?: string;
    sectionIndex: number;
    periodIndex: number;
    periodType: RiverRacePeriodType;
    periodLogs: PeriodLog[];
}

export interface CurrentRiverRaceClan {
    clanScore: number;
    rank: number;
    name: string;
    badgeUrl: string;
    fame: number;
    repairPoints: number;
    tag: string;
    participants?: CurrentRiverRaceParticipant[];
    numberParticipants: number;
    isMyClan: boolean;
}

export interface CurrentRiverRace {
    state: RiverRaceState;
    periodType: RiverRacePeriodType;
    warEndTime: string | null;
    clans: CurrentRiverRaceClan[];
}

export interface CurrentRiverRaceParticipant {
    tag: string;
    name: string;
    fame: number;
    repairPoints: number;
    boatAttacks: number;
    decksUsed: number;
    decksUsedToday: number;
}

export interface RiverRaceLogStanding {
    rank: number;
    trophyChange: number;
    clan: RiverRaceClan & { badgeUrl?: string };
}

export interface RiverRaceLogItem {
    seasonId: number;
    sectionIndex: number;
    createdDate: string;
    standings: RiverRaceLogStanding[];
}

export interface RiverRaceLog {
    items: RiverRaceLogItem[];
    paging: {
        cursors: {
            after?: string;
            before?: string;
        };
    };
}
