import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import ListRow from "../shared/ListRow";

interface ClanInfoPorps {
    clanScore: number;
    clanWarTrophies: number;
    donationsPerWeek: number;
    requiredTrophies: number;
    type: string;
    locationName: string;
}

export default function ClanInfo({
    clanScore,
    clanWarTrophies,
    donationsPerWeek,
    requiredTrophies,
    type,
    locationName,
}: ClanInfoPorps) {
    return (
        <CardContainer ariaLabelledBy="clan-info-title">
            <CardHeaderContainer>
                <CardTitle titleId="clan-info-title">Clan info</CardTitle>
                <Image
                    src="/assets/clan.webp"
                    alt="Clan illustration icon"
                    width={80}
                    height={80}
                    className="w-10"
                />
            </CardHeaderContainer>

            <ul className="list">
                <ListRow label="Trophies" value={clanScore} />
                <ListRow label="War trophies" value={clanWarTrophies} />
                <ListRow label="Donation per week" value={donationsPerWeek} />
                <ListRow label="Required trophies" value={requiredTrophies} />
                <ListRow label="Type" value={type} />
                <ListRow label="Location" value={locationName} />
            </ul>
        </CardContainer>
    );
}
