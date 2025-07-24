import { Player } from "@/types/player.interface";
import { fetchApi } from "../fetchApi";

export async function getPlayer(tag: string): Promise<Player> {
    try {
        const response = await fetchApi(`/players/%23${tag}`, {
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            throw new Error("Failed to fecth player");
        }

        return await response.json();
    } catch (err) {
        throw new Error(`Failed to fetch play: ${err}`);
    }
}
