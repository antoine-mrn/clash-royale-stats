import { BattleFromApi } from "@/types/battle.interface";
import { RecentDeck } from "@/types/card.interface";
import { getBattleResult } from "@/utils/battleResult";

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

        const isWin = getBattleResult(
            battle.team[0].crowns,
            battle.opponent[0].crowns
        );

        const win = isWin ? 1 : 0;
        const lose = !isWin ? 1 : 0;

        if (indexDeckFind === -1 && currentDeck) {
            const winRate = parseFloat(((win / (win + lose)) * 100).toFixed(2));

            const deckObj = {
                cards: currentDeck.cards,
                supportCard: currentDeck.supportCards[0] || null,
                win,
                lose,
                winRate,
            };
            decks.push(deckObj);
        } else if (indexDeckFind !== -1 && currentDeck) {
            const winUpdate = decks[indexDeckFind].win + win;
            const loseUpdate = decks[indexDeckFind].lose + lose;
            const winRateUpdate = parseFloat(
                ((winUpdate / (winUpdate + loseUpdate)) * 100).toFixed(2)
            );

            decks[indexDeckFind] = {
                ...decks[indexDeckFind],
                win: winUpdate,
                lose: loseUpdate,
                winRate: winRateUpdate,
            };
        }
    });
    return decks;
}
