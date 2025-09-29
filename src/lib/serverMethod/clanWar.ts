import { fetchApi } from "../fetchApi";
import mapCurrentRiverRace from "../mapper/mapWar";

export async function getCurrentRiverRace(tag: string): Promise<any> {
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
