import {
    Card,
    CardPreview,
    SupportCard,
    SupportCardPreview,
} from "@/types/card.interface";
import { Icon } from "@/types/icon.interface";
import Image from "next/image";

interface DeckListProps {
    deck: CardPreview[];
    supportCard: SupportCardPreview;
    className?: string;
}

export default function DeckList({
    deck,
    supportCard,
    className,
}: DeckListProps) {
    return (
        <article>
            <ul className={`grid grid-cols-4 px-4 mb-4 ${className}`}>
                {deck.map((card, index) => (
                    <li key={card.id} className="mx-auto max-w-24">
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
            <div className="px-4 pb-4 flex items-center gap-2">
                {supportCard && (
                    <>
                        <Image
                            src={supportCard?.iconUrls.medium}
                            alt="Support card illustration"
                            width={285}
                            height={420}
                            className="w-1/4 max-w-24"
                        />
                        <div>
                            <p className="text-sm font-semibold text-neutral-600">
                                {supportCard.name}
                            </p>
                            <p className="text-sm text-neutral-500">
                                {`Level ${supportCard.level}`}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </article>
    );
}
