import { PlayerPreview } from "@/types/player.interface";
import { fetchApi } from "../fetchApi";

export async function getPlayerRanking(): Promise<PlayerPreview[]> {
    try {
        const response = await fetchApi(
            `/locations/global/pathoflegend/2025-06/rankings/players?limit=10`
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
