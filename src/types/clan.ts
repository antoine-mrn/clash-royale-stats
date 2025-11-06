import { ClanChestStatus } from "./chest";
import { ClanMemberFromApi, ClanMember } from "./player";
import { Location } from "./location";

export interface ClanFromApi {
    tag: string;
    name: string;
    rank: number;
    previousRank: number;
    location: Location;
    clanScore: number;
    members: number;
    badgeId: number;
    clanWarTrophies: number;
    donationsPerWeek: number;
    requiredTrophies: number;
    type: ClanType;
    description: string;
    clanChestStatus: ClanChestStatus;
    clanChestLevel: number;
    clanChestMaxLevel: number;
    memberList: ClanMemberFromApi[];
    clanChestPoints: number;
}

export interface Clan {
    tag: string;
    name: string;
    rank: number;
    locationName: string;
    clanScore: number;
    members: number;
    clanWarTrophies: number;
    donationsPerWeek: number;
    requiredTrophies: number;
    type: ClanType;
    description: string;
    badgeUrl: string;
    memberList: ClanMember[];
}

export interface ClanLeaderboard {
    rank: number;
    previousRank: number;
    name: string;
    tag: string;
    members: number;
    clanScore: number;
    badgeId: number;
    location: Location;
}
export interface ClanPreview {
    badgeId: string;
    name: string;
    tag: string;
    badgeUrls?: string;
}

export enum ClanType {
    OPEN = "OPEN",
    INVITE_ONLY = "INVITE_ONLY",
    CLOSED = "CLOSED",
}

export enum ClanRole {
    NOT_MEMBER = "NOT_MEMBER",
    MEMBER = "MEMBER",
    LEADER = "LEADER",
    ADMIN = "ADMIN",
    COLEADER = "COLEADER",
}

export interface ClanHeroBanner {
    tag: string;
    name: string;
    badgeUrl: string;
    clanWarTrophies: number;
}
