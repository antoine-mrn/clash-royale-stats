import {
    CurrentRiverRace,
    CurrentRiverRaceFromApi,
    RiverRaceClan,
    RiverRaceClanFromApi,
    RiverRaceLog,
    RiverRaceLogFromApi,
    RiverRaceLogItem,
    RiverRaceLogItemFromApi,
} from "@/types/riverRace.interface";
import { getBadgeUrl } from "../services/badge.service";
import { sanitizeTag } from "@/utils/stringMethods";

export function mapCurrentRiverRace(
    riverRace: CurrentRiverRaceFromApi
): CurrentRiverRace {
    const clans = mapAndRankClans(riverRace.clans, riverRace.clan.tag);

    return {
        state: riverRace.state,
        periodType: riverRace.periodType,
        warEndTime: riverRace.warEndTime ?? null,
        clans,
    };
}

export function mapRiverRaceHistory(
    riverRaceHistory: RiverRaceLogFromApi,
    myClanTag: string
): RiverRaceLog {
    return {
        paging: riverRaceHistory.paging,
        items: riverRaceHistory.items.map((item) =>
            mapRiverRaceLogItem(item, myClanTag)
        ),
    };
}

function mapClanToUnifiedFormat(
    clan: RiverRaceClanFromApi,
    myClanTag: string,
    rank?: number
): RiverRaceClan {
    const baseCurrentRiverRaceClan = {
        clanScore: clan.clanScore,
        rank: rank ?? 0,
        name: clan.name,
        badgeUrl: getBadgeUrl(clan.badgeId),
        fame: clan.fame,
        repairPoints: clan.repairPoints,
        tag: clan.tag,
        numberParticipants: clan.participants.length,
        periodPoints: clan.periodPoints ?? 0,
        isMyClan: clan.tag === myClanTag,
    };

    if (myClanTag && clan.tag === myClanTag) {
        return {
            ...baseCurrentRiverRaceClan,
            participants: [...clan.participants].sort(
                (a, b) => b.fame - a.fame
            ),
        };
    }

    return baseCurrentRiverRaceClan;
}

function mapAndRankClans(clans: RiverRaceClanFromApi[], myClanTag: string) {
    return clans
        .map((clan) => mapClanToUnifiedFormat(clan, myClanTag))
        .sort((a, b) => b.fame - a.fame)
        .map((clan, index) => ({
            ...clan,
            rank: index + 1,
        }));
}

function mapRiverRaceLogItem(
    item: RiverRaceLogItemFromApi,
    myClanTag: string
): RiverRaceLogItem {
    return {
        seasonId: item.seasonId,
        sectionIndex: item.sectionIndex,
        createdDate: item.createdDate,
        standings: item.standings.map((standing) =>
            mapClanToUnifiedFormat(standing.clan, myClanTag, standing.rank)
        ),
    };
}
