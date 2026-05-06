import { Battle, BattleFromApi } from "@/types/battle";
import { fetchApi } from "../fetchApi";
import { mapBattlelog } from "../mapper/mapBattlelog";
import { unstable_cache } from "next/cache";

// export default async function getPlayerBattlelog(
//     tag: string
// ): Promise<Battle[]> {
//     const response = await fetchApi(`/players/%23${tag}/battlelog`, {
//         next: { revalidate: 300 },
//     });
//
//     const battles: BattleFromApi[] = await response.json();
//     return battles.map((battle) => mapBattlelog(battle));
// }

export const getPlayerBattlelog = unstable_cache(
    async (tag: string): Promise<Battle[]> => {
        const response = await fetchApi(`/players/%23${tag}/battlelog`);

        const battles: BattleFromApi[] = await response.json();
        return battles.map((battle) => mapBattlelog(battle));
    },
    ["player-battlelog"],
    { revalidate: 300 },
);
