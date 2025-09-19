import { Clan, ClanFromApi } from "@/types/clan.interface";
import { fetchApi } from "../fetchApi";
import { mapClan } from "../mapper/mapClan";

export async function getClan(tag: string): Promise<Clan> {
    try {
        const response = await fetchApi(`/clans/%23${tag}`, {
            next: { revalidate: 1800 },
        });

        if (!response.ok) {
            throw new Error("Failed to fecth player");
        }

        const ClanFromApi: ClanFromApi = await response.json();

        return mapClan(ClanFromApi);
    } catch (err) {
        throw new Error(`Failed to fetch play: ${err}`);
    }
}
