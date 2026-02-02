import { splitString } from "@/utils/stringMethods";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import { BadgePreview } from "@/types/achievement";

interface PlayerBadgesProps {
    badges: BadgePreview[];
}

export default function PlayerBadges({ badges }: PlayerBadgesProps) {
    return (
        <CardContainer ariaLabelledBy="player-badges-title">
            <CardHeaderContainer>
                <CardTitle titleId="player-badges-title">Badges</CardTitle>
                <Image
                    src="/assets/badge.webp"
                    alt="Achievement badge icon"
                    width={80}
                    height={83}
                    className="w-10"
                />
            </CardHeaderContainer>

            <ul className="grid grid-cols-3 sm:grid-cols-4 overflow-x-hidden">
                {badges.slice(0, 12).map((badge) => (
                    <li
                        key={badge.name}
                        className="tooltip mx-auto w-22 md:w-28"
                        data-tip={splitString(badge.name)}
                    >
                        <Image
                            src={badge.iconUrls.large || ""}
                            alt={`${badge.name}`}
                            width={112}
                            height={112}
                        />
                    </li>
                ))}
            </ul>

            {/* <button className="btn btn-soft btn-secondary mx-2 mt-auto mb-2">
                View all badges
            </button> */}
        </CardContainer>
    );
}
