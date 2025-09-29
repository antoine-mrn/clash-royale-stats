import {
    CurrentRiverRace,
    CurrentRiverRaceClan,
    CurrentRiverRaceFromApi,
} from "@/types/riverRace.interface";

export default function mapCurrentRiverRace(
    riverRace: CurrentRiverRaceFromApi
): CurrentRiverRace {
    const clans: CurrentRiverRaceClan[] = riverRace.clans.map((clan) => {
        const baseCurrentRiverRaceClan = {
            clanScore: clan.clanScore,
            name: clan.name,
            periodPoints: clan.periodPoints,
            repairPoints: clan.repairPoints,
            tag: clan.tag,
            numberParticipants: clan.participants.length,
        };

        if (clan.tag === riverRace.clan.tag) {
            return {
                ...baseCurrentRiverRaceClan,
                participants: clan.participants,
                isMyClan: true,
            };
        }

        return {
            ...baseCurrentRiverRaceClan,
            isMyClan: false,
        };
    });

    clans.sort((a, b) => b.periodPoints - a.periodPoints);

    return {
        state: riverRace.state,
        periodType: riverRace.periodType,
        warEndTime: riverRace.warEndTime,
        clans,
    };
}
