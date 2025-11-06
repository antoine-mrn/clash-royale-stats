import { CardPreview, Deck, SupportCardPreview } from "@/types/card";
import Image from "next/image";

interface DeckListProps {
    cards: CardPreview[];
    supportCard: SupportCardPreview | null;
    className?: string;
}

export default function DeckList({
    cards,
    supportCard,
    className,
}: DeckListProps) {
    return (
        <article>
            <ul className={`grid grid-cols-4 px-4 mb-4 ${className}`}>
                {cards.map((card, index) => (
                    <li key={card.id} className="mx-auto max-w-16">
                        <Image
                            src={
                                card.iconUrls.evolutionMedium && index < 2
                                    ? card.iconUrls.evolutionMedium
                                    : card.iconUrls.medium
                            }
                            alt={`${card.name}`}
                            width={285}
                            height={420}
                            sizes="(max-width: 768px) 128px, 160px"
                        />
                    </li>
                ))}
                {supportCard && (
                    <li className="mx-auto max-w-16 flex items-center mt-4 md:mt-8">
                        <Image
                            src={supportCard?.iconUrls.medium}
                            alt={supportCard.name}
                            width={285}
                            height={420}
                            sizes="64px"
                        />
                        <div>
                            <p className="text-sm font-semibold text-base-content/70">
                                {supportCard.name}
                            </p>
                            <p className="text-sm text-base-content/60">
                                {`Level ${supportCard.level}`}
                            </p>
                        </div>
                    </li>
                )}
            </ul>
        </article>
    );
}
