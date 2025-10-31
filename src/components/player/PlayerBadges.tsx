import { splitString } from "@/utils/stringMethods";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import { BadgePreview } from "@/types/achievement.interface";

interface PlayerBadgesProps {
    badges: BadgePreview[];
}

export default function PlayerBadges({ badges }: PlayerBadgesProps) {
    return (
        <CardContainer ariaLabelledBy="player-badges-title">
            <CardHeaderContainer>
                <CardTitle titleId="player-badges-title">Badges</CardTitle>
                <Image
                    src="/badge.png"
                    alt="Badge image"
                    className="w-10"
                    width={342}
                    height={356}
                />
            </CardHeaderContainer>

            <ul className="grid grid-cols-4">
                {badges.slice(0, 12).map((badge) => (
                    <li
                        key={badge.name}
                        className="tooltip"
                        data-tip={splitString(badge.name)}
                    >
                        <Image
                            src={badge.iconUrls.large || ""}
                            alt={`${badge.name}`}
                            width={512}
                            height={512}
                            className="w-28"
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
