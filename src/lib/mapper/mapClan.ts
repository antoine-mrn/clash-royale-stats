import { Clan, ClanFromApi } from "@/types/clan.interface";
import moment from "moment";

export function mapClan(ClanFromApi: ClanFromApi): Clan {
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
        memberList: ClanFromApi.memberList.map((member) => ({
            clanRank: member.clanRank,
            donations: member.donations,
            donationsReceived: member.donationsReceived,
            expLevel: member.expLevel,
            lastSeen: moment(member.lastSeen).fromNow(),
            name: member.name,
            role: member.role,
            tag: member.tag,
            trophies: member.trophies,
        })),
    };
}
