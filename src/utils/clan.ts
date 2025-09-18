import { ClanMember } from "@/types/player.interface";

export function getSortedClanMembers(members: ClanMember[]): ClanMember[] {
    return [...members].sort((a, b) => a.clanRank - b.clanRank);
}
