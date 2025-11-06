import { BattleFromApi } from "@/types/battle";
import { RecentDeck } from "@/types/card";
import { getBattleResult } from "./battle.service";

export default function computeDeckStats(
    tag: string,
    battlelog: BattleFromApi[]
): RecentDeck[] {
    let decks: RecentDeck[] = [];

    battlelog.forEach((battle) => {
        const currentDeck = battle.team.find((el) => el.tag === `#${tag}`);
        let indexDeckFind = decks.findIndex((deck) => {
            return deck.cards.every((card) =>
                currentDeck?.cards.some(
                    (currentCard) => card.id === currentCard.id
                )
            );
        });

        const result = getBattleResult(
            battle.team[0].crowns,
            battle.opponent[0].crowns
        );

        const wins = result === "win" ? 1 : 0;
        const losses = result === "lose" ? 1 : 0;

        if (indexDeckFind === -1 && currentDeck) {
            const winRate = parseFloat(
                ((wins / (wins + losses)) * 100).toFixed(2)
            );

            const deckObj = {
                cards: currentDeck.cards,
                supportCard: currentDeck.supportCards[0] || null,
                wins,
                losses,
                winRate,
            };
            decks.push(deckObj);
        } else if (indexDeckFind !== -1 && currentDeck) {
            const winUpdate = decks[indexDeckFind].wins + wins;
            const loseUpdate = decks[indexDeckFind].losses + losses;
            const winRateUpdate = parseFloat(
                ((winUpdate / (winUpdate + loseUpdate)) * 100).toFixed(2)
            );

            decks[indexDeckFind] = {
                ...decks[indexDeckFind],
                wins: winUpdate,
                losses: loseUpdate,
                winRate: winRateUpdate,
            };
        }
    });
    return decks;
}
