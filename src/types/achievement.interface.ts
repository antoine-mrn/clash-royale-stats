import { Icon } from "./icon.interface";

export interface Badge {
    iconUrls: Icon;
    maxLevel: number;
    progress: number;
    target: number;
    level: number;
    name: string;
}

export interface BadgePreview {
    iconUrls: Icon;
    name: string;
}

export interface Achievement {
    completionInfo: string | null;
    info: string;
    name: string;
    stars: number;
    target: number;
    value: number;
}
