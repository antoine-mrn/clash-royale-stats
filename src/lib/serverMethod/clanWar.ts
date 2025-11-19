import { CurrentRiverRace, RiverRaceLog } from "@/types/riverRace";
import { fetchApi } from "../fetchApi";
import { mapCurrentRiverRace, mapRiverRaceHistory } from "../mapper/mapWar";

export async function getCurrentRiverRace(
    tag: string
): Promise<CurrentRiverRace> {
    const response = await fetchApi(`/clans/%23${tag}/currentriverrace`, {
        next: { revalidate: 600 },
    });

    const riverRaceFromApi = await response.json();
    const riverRace = mapCurrentRiverRace(riverRaceFromApi);

    return riverRace;
}

export async function getRiverRaceHistory(
    tag: string,
    limit: number,
    after?: string
): Promise<RiverRaceLog> {
    let query = `/clans/%23${tag}/riverracelog?limit=${limit}`;
    if (after) query += `&after=${after}`;

    const response = await fetchApi(query, {
        next: { revalidate: 600 },
    });

    const riverRaceHistoryFromApi = await response.json();
    const RiverRaceHistory = mapRiverRaceHistory(
        riverRaceHistoryFromApi,
        `#${tag}`
    );
    return RiverRaceHistory;
}
