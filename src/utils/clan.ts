import { ClanMember } from "@/types/player";

export function getSortedClanMembers(members: ClanMember[]): ClanMember[] {
    return [...members].sort((a, b) => a.clanRank - b.clanRank);
}
