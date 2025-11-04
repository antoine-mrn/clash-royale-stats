import CardContainer from "../shared/CardContainer";
import Image from "next/image";
import CardTitle from "../ui/CardTitle";
import CardHeaderContainer from "../shared/CardHeaderContainer";

interface ClanDescriptionProps {
    description: string;
}

export default function ClanDescription({ description }: ClanDescriptionProps) {
    return (
        <CardContainer ariaLabelledBy="clan-description-title">
            <CardHeaderContainer>
                <CardTitle titleId="clan-description-title">
                    Clan description
                </CardTitle>
                <Image
                    src="/assets/clan-flame.webp"
                    alt="Flaming clan emblem icon"
                    width={80}
                    height={80}
                    className="w-10"
                />
            </CardHeaderContainer>

            <p className="p-4">{description}</p>
        </CardContainer>
    );
}
