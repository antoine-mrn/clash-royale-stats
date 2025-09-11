import { Clan } from "@/types/clan.interface";
import { fetchApi } from "../fetchApi";

export async function getClan(tag: string): Promise<Clan> {
    try {
        const response = await fetchApi(`/clans/%23${tag}`, {
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            throw new Error("Failed to fecth player");
        }

        return response.json();
    } catch (err) {
        throw new Error(`Failed to fetch play: ${err}`);
    }
}
