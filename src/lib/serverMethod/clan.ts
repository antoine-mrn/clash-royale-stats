import { Clan, ClanFromApi } from "@/types/clan.interface";
import { fetchApi } from "../fetchApi";
import { mapClan } from "../mapper/mapClan";
import { cache } from "react";

export const getClan = cache(async (tag: string): Promise<Clan> => {
    try {
        const response = await fetchApi(`/clans/%23${tag}`, {
            next: { revalidate: 1800 },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch clan");
        }

        const ClanFromApi: ClanFromApi = await response.json();

        return mapClan(ClanFromApi);
    } catch (err) {
        throw new Error(`Failed to fetch clan: ${err}`);
    }
});
