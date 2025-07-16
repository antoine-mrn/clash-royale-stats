import { getAverageElixir, getCycleElixirCost } from "@/utils/deckStats";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import { Card } from "@/types/card.interface";

interface PlayerCurrentDeckProps {
    deck: Card[];
}

export default function PlayerCurrentDeck({ deck }: PlayerCurrentDeckProps) {
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
            <ul className="grid grid-cols-4 px-4 mb-4">
                {deck.map((card, index) => (
                    <li key={card.id} className="mx-auto">
                        <Image
                            src={
                                card.iconUrls.evolutionMedium && index < 2
                                    ? card.iconUrls.evolutionMedium
                                    : card.iconUrls.medium
                            }
                            alt={`${card.name} image`}
                            width={285}
                            height={420}
                        />
                    </li>
                ))}
            </ul>

            <div className="mx-2 mt-auto mb-4 flex justify-center bg-base-300 gap-6 px-4 rounded-lg">
                <div className="flex items-center">
                    <p className="font-bold text-sm">
                        {getAverageElixir(deck)}
                    </p>
                    <Image
                        src="/elixir.png"
                        alt="Elixir image"
                        width={288}
                        height={288}
                        className="w-10"
                    />
                </div>
                <div className="flex items-center">
                    <p className="font-bold text-sm">
                        {getCycleElixirCost(deck)}
                    </p>
                    <Image
                        src="/four-card-cycle.png"
                        alt="Four card cycle image"
                        width={288}
                        height={288}
                        className="w-10"
                    />
                </div>
            </div>
        </CardContainer>
    );
}
