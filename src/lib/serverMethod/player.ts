import { Player, PlayerFromApi } from "@/types/player";
import { fetchApi } from "../fetchApi";
import { mapPlayer } from "../mapper/mapPlayer";
import { cache } from "react";

export const getPlayer = cache(async function getPlayer(
    tag: string
): Promise<Player> {
    const response = await fetchApi(`/players/%23${tag}`, {
        next: { revalidate: 300 },
    });

    const PlayerFromApi: PlayerFromApi = await response.json();
    return mapPlayer(PlayerFromApi);
});
