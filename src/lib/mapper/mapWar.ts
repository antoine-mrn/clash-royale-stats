import {
    CurrentRiverRace,
    CurrentRiverRaceFromApi,
} from "@/types/riverRace.interface";
import { getBadgeUrl } from "../services/badge.service";

export default function mapCurrentRiverRace(
    riverRace: CurrentRiverRaceFromApi
): CurrentRiverRace {
    const clans = riverRace.clans
        .map((clan) => {
            const baseCurrentRiverRaceClan = {
                clanScore: clan.clanScore,
                name: clan.name,
                badgeUrl: getBadgeUrl(clan.badgeId),
                periodPoints: clan.periodPoints,
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
        .sort((a, b) => b.periodPoints - a.periodPoints)
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
