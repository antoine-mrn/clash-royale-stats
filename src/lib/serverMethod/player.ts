import { Player, PlayerFromApi } from "@/types/player";
import { fetchApi } from "../fetchApi";
import { mapPlayer } from "../mapper/mapPlayer";
import { cache } from "react";
import { unstable_cache } from "next/cache";

const fetchPlayer = unstable_cache(
    async (tag: string): Promise<Player> => {
        const response = await fetchApi(`/players/%23${tag}`);

        const PlayerFromApi: PlayerFromApi = await response.json();

        return mapPlayer(PlayerFromApi);
    },
    ["player"],
    { revalidate: 300 },
);

export const getPlayer = cache(fetchPlayer);
