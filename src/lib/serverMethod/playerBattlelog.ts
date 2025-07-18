import { Battle } from "@/types/battle.interface";
import { fetchApi } from "../fetchApi";
import { revalidate } from "@/app/player/[tag]/page";

export default async function getPlayerBattlelog(
    tag: string
): Promise<Battle[]> {
    try {
        const response = await fetchApi(`/players/%23${tag}/battlelog`, {
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            throw new Error("Failed to fecth player battlelog");
        }

        return await response.json();
    } catch (err) {
        console.log("🚀 ~ err:", err);
        throw new Error(`Failed to fetch play: ${err}`);
    }
}
