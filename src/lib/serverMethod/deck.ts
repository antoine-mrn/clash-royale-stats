import { RecentDeck } from "@/types/card.interface";
import { fetchApi } from "../fetchApi";
import computeDeckStats from "../services/deckStats.service";

export default async function getRecentDecks(
    tag: string
): Promise<RecentDeck[]> {
    const response = await fetchApi(`/players/%23${tag}/battlelog`, {
        next: { revalidate: 300 },
    });

    if (!response.ok) {
        throw new Error("Failed to fecth player battlelog");
    }

    const battle = await response.json();
    const decks = computeDeckStats(tag, battle);

    return decks;
}
