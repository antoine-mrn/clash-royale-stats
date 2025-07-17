import { Clan } from "@/types/clan.interface";
import { setupApi } from "../setupApi";

const api = setupApi();

export async function getClanRanking(
    location: number = 57000000
): Promise<Clan[]> {
    try {
        const { data } = await api.get(
            `https://api.clashroyale.com/v1/locations/${location}/rankings/clanwars?limit=10`
        );
        return data.items;
    } catch (err) {
        throw new Error("Failed to fetch clan wars rank");
    }
}
