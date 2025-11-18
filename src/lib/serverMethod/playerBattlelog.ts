import { Battle, BattleFromApi } from "@/types/battle";
import { fetchApi } from "../fetchApi";
import { mapBattlelog } from "../mapper/mapBattlelog";

export default async function getPlayerBattlelog(
    tag: string
): Promise<Battle[]> {
    const response = await fetchApi(`/players/%23${tag}/battlelog`);

    const battles: BattleFromApi[] = await response.json();
    return battles.map((battle) => mapBattlelog(battle));
}
