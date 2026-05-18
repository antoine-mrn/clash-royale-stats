import { PlayerPreview } from "@/types/player";
import { fetchApi } from "../fetchApi";
import { getLastSeasonId } from "./season";

export async function getPlayerRanking(): Promise<PlayerPreview[]> {
    // const lastSeasonId = await getLastSeasonId();

    const response = await fetchApi(
        `/locations/global/pathoflegend/players?limit=10`,
        {
            next: { revalidate: 86400 },
        },
    );

    const { items } = await response.json();
    console.log("🚀 ~ getPlayerRanking ~ items:", items);
    return items;
}
