import DeckList from "@/components/deck/DeckList";
import CardContainer from "@/components/shared/CardContainer";
import CardHeaderContainer from "@/components/shared/CardHeaderContainer";
import ListRow from "@/components/shared/ListRow";
import CardTitle from "@/components/ui/CardTitle";
import getRecentDecks from "@/lib/serverMethod/deck";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const recentDecks = await getRecentDecks(tag);

    return (
        <section className="max-w-7xl grid sm:grid-cols-2 gap-8 px-6 w-full mx-auto md:justify-center md:grid-cols-3">
            {recentDecks.map((deck, index) => (
                <CardContainer key={index}>
                    <CardHeaderContainer>
                        <CardTitle>Deck stats</CardTitle>
                    </CardHeaderContainer>
                    <DeckList
                        cards={deck.cards}
                        supportCard={deck.supportCard}
                    />
                    <ul className="list">
                        <ListRow label="Wins" value={deck.wins} />
                        <ListRow label="Losses" value={deck.losses} />
                        <ListRow label="Win rate" value={`${deck.winRate}%`} />
                    </ul>
                </CardContainer>
            ))}
        </section>
    );
}
