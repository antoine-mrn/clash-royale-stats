import { CurrentRiverRace, RiverRaceLog } from "@/types/riverRace.interface";
import { fetchApi } from "../fetchApi";
import { mapCurrentRiverRace } from "../mapper/mapWar";

export async function getCurrentRiverRace(
    tag: string
): Promise<CurrentRiverRace> {
    try {
        const response = await fetchApi(`/clans/%23${tag}/currentriverrace`, {
            next: { revalidate: 600 },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch river race");
        }

        const riverRaceFromApi = await response.json();
        const riverRace = mapCurrentRiverRace(riverRaceFromApi);

        return riverRace;
    } catch (err) {
        throw new Error(`Failed to fetch river race: ${err}`);
    }
}

export async function getRiverRaceHistory(
    tag: string,
    limit: number,
    after?: string
): Promise<RiverRaceLog> {
    try {
        const response = await fetchApi(
            `/clans/%23${tag}/riverracelog?limit=${limit}`,
            {
                next: { revalidate: 600 },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch river race history");
        }

        const riverRaceHistoryFromApi = await response.json();
        return riverRaceHistoryFromApi;
    } catch (err) {
        throw new Error(`Failed to fetch river race history: ${err}`);
    }
}
