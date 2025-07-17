import { useApi } from "@/hooks/useApi";
import { PlayerPreview } from "@/types/player.interface";

const api = useApi();

export async function getPlayerRanking(): Promise<PlayerPreview[]> {
    try {
        const { data } = await api.get(
            "/locations/global/pathoflegend/2025-06/rankings/players?limit=10"
        );
        return data.items;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch players rank");
    }
}
