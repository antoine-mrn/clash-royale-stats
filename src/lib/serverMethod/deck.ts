import { RecentDeck } from "@/types/card";
import { fetchApi } from "../fetchApi";
import computeDeckStats from "../services/deckStats.service";

export default async function getRecentDecks(
    tag: string
): Promise<RecentDeck[]> {
    const response = await fetchApi(`/players/%23${tag}/battlelog`);

    const battle = await response.json();
    const decks = computeDeckStats(tag, battle);

    return decks;
}
