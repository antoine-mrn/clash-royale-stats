import { Clan, ClanFromApi } from "@/types/clan.interface";
import { fetchApi } from "../fetchApi";
import { mapClan } from "../mapper/mapClan";
import { cache } from "react";

export const getClan = cache(async function getClan(
    tag: string
): Promise<Clan> {
    try {
        const response = await fetchApi(`/clans/%23${tag}`, {
            next: { revalidate: 1800 },
        });

        if (!response.ok) {
            // throw new Error("Failed to fetch clan");
            const errorText = await response.text();
            console.error(`[getClan] API Error ${response.status}:`, errorText);
            throw new Error(`API returned ${response.status}: ${errorText}`);
        }

        const ClanFromApi: ClanFromApi = await response.json();
        console.log(`[getClan] Success for ${tag}`);

        return mapClan(ClanFromApi);
    } catch (err) {
        // throw new Error(`Failed to fetch clan: ${err}`);
        console.error(`[getClan] Error for tag ${tag}:`, err);

        // Re-throw avec plus de contexte
        if (err instanceof Error) {
            throw new Error(`Failed to fetch clan ${tag}: ${err.message}`);
        }
        throw err;
    }
});
