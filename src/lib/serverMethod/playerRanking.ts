import { PlayerPreview } from "@/types/player.interface";
import { fetchApi } from "../fetchApi";
import { getLastSeasonId } from "./season";

export async function getPlayerRanking(): Promise<PlayerPreview[]> {
    try {
        const lastSeasonId = await getLastSeasonId();
        console.log("🚀 ~ getPlayerRanking ~ lastSeasonId:", lastSeasonId);

        const response = await fetchApi(
            `/locations/global/pathoflegend/${lastSeasonId}/rankings/players?limit=10`,
            {
                next: { revalidate: 86400 },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fecth player rank");
        }

        const { items } = await response.json();
        return items;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch players rank");
    }
}
