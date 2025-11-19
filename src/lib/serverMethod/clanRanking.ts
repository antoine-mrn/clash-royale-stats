import { ClanLeaderboard } from "@/types/clan";
import { fetchApi } from "../fetchApi";

export async function getClanRanking(
    location: number = 57000000
): Promise<ClanLeaderboard[]> {
    const response = await fetchApi(
        `/locations/${location}/rankings/clanwars?limit=10`,
        {
            next: { revalidate: 300 },
        }
    );

    const { items } = await response.json();
    return items;
}
