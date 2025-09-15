import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import { Location } from "@/types/location.interface";
import ListRow from "../shared/ListRow";

interface ClanInfoPorps {
    clanScore: number;
    clanWarTrophies: number;
    donationsPerWeek: number;
    requiredTrophies: number;
    type: string;
    location: Location;
}

export default function ClanInfo({
    clanScore,
    clanWarTrophies,
    donationsPerWeek,
    requiredTrophies,
    type,
    location,
}: ClanInfoPorps) {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <CardTitle>Clan info</CardTitle>
                <Image
                    src="/clan.png"
                    alt="Clan illustration"
                    width={216}
                    height={216}
                    className="w-10"
                />
            </CardHeaderContainer>

            <ul className="list">
                <ListRow label="Trophies" value={clanScore} />
                <ListRow label="War trophies" value={clanWarTrophies} />
                <ListRow label="Donation per week" value={donationsPerWeek} />
                <ListRow label="Required trophies" value={requiredTrophies} />
                <ListRow label="Type" value={type} />
                <ListRow label="Location" value={location.name} />
            </ul>
        </CardContainer>
    );
}
