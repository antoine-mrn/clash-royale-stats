import { PlayerPreview } from "@/types/player";
import { fetchApi } from "../fetchApi";
import { getLastSeasonId } from "./season";

export async function getPlayerRanking(): Promise<PlayerPreview[]> {
    const lastSeasonId = await getLastSeasonId();

    const response = await fetchApi(
        `/locations/global/pathoflegend/${lastSeasonId}/rankings/players?limit=10`
    );

    const { items } = await response.json();
    return items;
}
