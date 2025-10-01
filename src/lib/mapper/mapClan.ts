import { Clan, ClanFromApi, ClanHeroBanner } from "@/types/clan.interface";
import { getSortedClanMembers } from "@/utils/clan";
import { getBadgeUrl } from "../services/badge.service";

export function mapClan(ClanFromApi: ClanFromApi): Clan {
    const memberListSorted = getSortedClanMembers(ClanFromApi.memberList);

    return {
        tag: ClanFromApi.tag,
        name: ClanFromApi.name,
        rank: ClanFromApi.rank,
        locationName: ClanFromApi.location.name,
        clanScore: ClanFromApi.clanScore,
        members: ClanFromApi.members,
        clanWarTrophies: ClanFromApi.clanWarTrophies,
        donationsPerWeek: ClanFromApi.donationsPerWeek,
        requiredTrophies: ClanFromApi.requiredTrophies,
        type: ClanFromApi.type,
        description: ClanFromApi.description,
        badgeUrl: getBadgeUrl(ClanFromApi.badgeId),
        memberList: memberListSorted.map((member) => ({
            clanRank: member.clanRank,
            donations: member.donations,
            donationsReceived: member.donationsReceived,
            expLevel: member.expLevel,
            lastSeen: member.lastSeen,
            name: member.name,
            role: member.role,
            tag: member.tag,
            trophies: member.trophies,
        })),
    };
}

export function mapHeroBannerClan(clan: Clan): ClanHeroBanner {
    return {
        tag: clan.tag,
        name: clan.name,
        badgeUrl: clan.badgeUrl,
        clanWarTrophies: clan.clanWarTrophies,
    };
}
