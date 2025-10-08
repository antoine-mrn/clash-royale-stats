import { Battle, BattleFromApi } from "@/types/battle.interface";
import { fetchApi } from "../fetchApi";
import { mapBattlelog } from "../mapper/mapBattlelog";

export default async function getPlayerBattlelog(
    tag: string
): Promise<Battle[]> {
    const response = await fetchApi(`/players/%23${tag}/battlelog`, {
        next: { revalidate: 300 },
    });

    const battles: BattleFromApi[] = await response.json();
    return battles.map((battle) => mapBattlelog(battle));
}
