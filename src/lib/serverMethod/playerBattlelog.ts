import { Battle, BattleFromApi } from "@/types/battle.interface";
import { fetchApi } from "../fetchApi";
import { mapBattlelog } from "../mapper/mapBattlelog";

export default async function getPlayerBattlelog(
    tag: string
): Promise<Battle[]> {
    try {
        const response = await fetchApi(`/players/%23${tag}/battlelog`, {
            next: { revalidate: 300 },
        });

        if (!response.ok) {
            throw new Error("Failed to fecth player battlelog");
        }

        const battles: BattleFromApi[] = await response.json();
        return battles.map((battle) => mapBattlelog(battle));
    } catch (err) {
        console.log("🚀 ~ err:", err);
        throw new Error(`Failed to fetch play: ${err}`);
    }
}
