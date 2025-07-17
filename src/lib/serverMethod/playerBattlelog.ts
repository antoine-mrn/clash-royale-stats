import { Battle } from "@/types/battle.interface";
import { setupApi } from "../setupApi";

const api = setupApi();

export default async function getPlayerBattlelog(
    tag: string
): Promise<Battle[]> {
    try {
        const { data } = await api.get(`/players/%23${tag}/battlelog`);

        return data;
    } catch (err) {
        throw new Error(`Failed to fetch play: ${err}`);
    }
}
