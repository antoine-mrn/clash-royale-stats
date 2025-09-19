import { fetchApi } from "../fetchApi";
import computeDeckStats from "../services/deckStats.service";

export default async function getRecentDecks(tag: string): Promise<any> {
    try {
        const response = await fetchApi(`/players/%23${tag}/battlelog`, {
            next: { revalidate: 300 },
        });

        if (!response.ok) {
            throw new Error("Failed to fecth player battlelog");
        }

        const battle = await response.json();
        // console.log("🚀 ~ getRecentDecks ~ battle:", battle);
        const decks = computeDeckStats(tag, battle);
        console.log("🚀 ~ getRecentDecks ~ decks:", decks);
        return battle;
    } catch (err) {
        console.log("🚀 ~ err:", err);
        throw new Error(`Failed to fetch play: ${err}`);
    }
}
