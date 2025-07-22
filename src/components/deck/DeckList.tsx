import { Card } from "@/types/card.interface";
import Image from "next/image";

interface DeckListProps {
    deck: Card[];
    className?: string;
}

export default function DeckList({ deck, className }: DeckListProps) {
    return (
        <ul className={`grid grid-cols-4 px-4 mb-4 ${className}`}>
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
    );
}
