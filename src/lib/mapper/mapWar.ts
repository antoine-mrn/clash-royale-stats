import {
    CurrentRiverRace,
    CurrentRiverRaceFromApi,
    RiverRaceLog,
} from "@/types/riverRace.interface";
import { getBadgeUrl } from "../services/badge.service";

export function mapCurrentRiverRace(
    riverRace: CurrentRiverRaceFromApi
): CurrentRiverRace {
    const clans = riverRace.clans
        .map((clan) => {
            const baseCurrentRiverRaceClan = {
                clanScore: clan.clanScore,
                name: clan.name,
                badgeUrl: getBadgeUrl(clan.badgeId),
                fame: clan.fame,
                repairPoints: clan.repairPoints,
                tag: clan.tag,
                numberParticipants: clan.participants.length,
            };

            if (clan.tag === riverRace.clan.tag) {
                return {
                    ...baseCurrentRiverRaceClan,
                    participants: [...clan.participants].sort(
                        (a, b) => b.fame - a.fame
                    ),
                    isMyClan: true,
                };
            }

            return {
                ...baseCurrentRiverRaceClan,
                isMyClan: false,
            };
        })
        .sort((a, b) => b.fame - a.fame)
        .map((clan, index) => ({
            ...clan,
            rank: index + 1,
        }));

    return {
        state: riverRace.state,
        periodType: riverRace.periodType,
        warEndTime: riverRace.warEndTime ?? null,
        clans,
    };
}

export function mapRiverRaceHistory(
    riverRaceHistory: RiverRaceLog
): RiverRaceLog {
    return {
        ...riverRaceHistory,
        items: riverRaceHistory.items.map((item) => ({
            ...item,
            standings: item.standings.map((standing) => ({
                ...standing,
                clan: {
                    ...standing.clan,
                    badgeUrl: getBadgeUrl(standing.clan.badgeId),
                },
            })),
        })),
    };
}
