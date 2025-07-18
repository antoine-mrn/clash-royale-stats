import { Clan } from "@/types/clan.interface";
import { fetchApi } from "../fetchApi";

export async function getClanRanking(
    location: number = 57000000
): Promise<Clan[]> {
    try {
        const response = await fetchApi(
            `/locations/${location}/rankings/clanwars?limit=10`
        );

        if (!response.ok) {
            throw new Error("Failed to fecth clan wars rank");
        }

        const { items } = await response.json();
        return items;
    } catch (err) {
        throw new Error("Failed to fetch clan wars rank");
    }
}
