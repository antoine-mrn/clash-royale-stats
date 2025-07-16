import { Location } from "./location.interface";

export interface Clan {
    tag: string;
    name: string;
    rank: number;
    previousRank: number;
    location: Location;
    clanScore: number;
    members: number;
    badgeId: number;
}

export interface ClanPreview {
    badgeId: string;
    name: string;
    tag: string;
    badgeUrls?: string;
}
