import CardContainer from "../shared/CardContainer";
import Image from "next/image";
import CardTitle from "../ui/CardTitle";
import CardHeaderContainer from "../shared/CardHeaderContainer";

interface ClanDescriptionProps {
    description: string;
}

export default function ClanDescription({ description }: ClanDescriptionProps) {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <CardTitle>Clan info</CardTitle>
                <Image
                    src="/clan-flame.png"
                    alt="Clan flame icon"
                    width={80}
                    height={80}
                    className="w-10"
                />
            </CardHeaderContainer>

            <p className="p-4 text-primary-content">{description}</p>
        </CardContainer>
    );
}
