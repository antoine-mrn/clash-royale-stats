import { Player, PlayerFromApi } from "@/types/player.interface";
import { fetchApi } from "../fetchApi";
import { mapPlayer } from "../mapper/mapPlayer";

export async function getPlayer(tag: string): Promise<Player> {
    try {
        const response = await fetchApi(`/players/%23${tag}`, {
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            throw new Error("Failed to fecth player");
        }

        const PlayerFromApi: PlayerFromApi = await response.json();
        const cleanData = mapPlayer(PlayerFromApi);

        return cleanData;
    } catch (err) {
        throw new Error(`Failed to fetch play: ${err}`);
    }
}
