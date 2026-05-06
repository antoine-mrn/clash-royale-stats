import { Battle, BattleFromApi } from "@/types/battle";
import { fetchApi } from "../fetchApi";
import { mapBattlelog } from "../mapper/mapBattlelog";
import { unstable_cache } from "next/cache";

export const getPlayerBattlelog = unstable_cache(
    async (tag: string): Promise<Battle[]> => {
        const res = await fetchApi(`/players/%23${tag}/battlelog`);
        const battles: BattleFromApi[] = await res.json();
        return battles.map(mapBattlelog);
    },
    ["player-battlelog"],
    { revalidate: 300 },
);
