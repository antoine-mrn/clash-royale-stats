import { Location } from "./location.interface";
import { PlayerInClan } from "./player.interface";

export interface Clan {
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
    type: string;
    description: string;
    memberList: PlayerInClan[];
}

export interface ClanPreview {
    badgeId: string;
    name: string;
    tag: string;
    badgeUrls?: string;
}
