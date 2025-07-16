import { useApi } from "@/hooks/useApi";
import { Player } from "@/types/player.interface";

const api = useApi()

export async function getPlayer(tag: string): Promise<Player> {
    try {
        const { data } = await api.get(`/players/%23${tag}`)

        return data
    } catch(err) {
        throw new Error(`Failed to fetch play: ${err}`)
    }
}
