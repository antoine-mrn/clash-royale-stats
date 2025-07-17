
import { Player } from "@/types/player.interface";
import { setupApi } from "../setupApi";

const api = setupApi()

export async function getPlayer(tag: string): Promise<Player> {
    try {
        const { data } = await api.get(`/players/%23${tag}`)

        return data
    } catch(err) {
        throw new Error(`Failed to fetch play: ${err}`)
    }
}
