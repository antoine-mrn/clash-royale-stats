import {
    Player,
    PlayerFromApi,
    PlayerHeroBanner,
} from "@/types/player.interface";
import { fetchApi } from "../fetchApi";
import { mapHeroBannerPlayer, mapPlayer } from "../mapper/mapPlayer";

export async function getPlayer(tag: string): Promise<Player> {
    try {
        const response = await fetchApi(`/players/%23${tag}`, {
            next: { revalidate: 300 },
        });

        if (!response.ok) {
            throw new Error("Failed to fecth player");
        }

        const PlayerFromApi: PlayerFromApi = await response.json();
        return mapPlayer(PlayerFromApi);
    } catch (err) {
        throw new Error(`Failed to fetch play: ${err}`);
    }
}
