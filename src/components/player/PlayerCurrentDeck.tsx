import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import { Deck, SupportCardPreview } from "@/types/card.interface";
import DeckList from "../deck/DeckList";
import DeckStats from "../deck/DeckStats";

interface PlayerCurrentDeckProps {
    deck: Deck;
    supportCard: SupportCardPreview;
}

export default function PlayerCurrentDeck({
    deck,
    supportCard,
}: PlayerCurrentDeckProps) {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <CardTitle>Current deck</CardTitle>
                <Image
                    src="/deck.png"
                    alt="Deck image"
                    className="w-10"
                    width={216}
                    height={216}
                />
            </CardHeaderContainer>

            <DeckList cards={deck.cards} supportCard={supportCard} />

            <DeckStats
                averageElixir={deck.averageElixir}
                elixirFourCardCycle={deck.elixirFourCardCycle}
            />
        </CardContainer>
    );
}
