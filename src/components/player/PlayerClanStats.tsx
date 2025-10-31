import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import ListRow from "../shared/ListRow";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";

interface PlayerClanStatsProps {
    role: string;
    donations: number;
    donationsReceived: number;
    totalDonations: number;
    warDayWins: number;
    clan: { name: string | null; tag: string | null };
}

export default function PlayerClanStats({
    role,
    donations,
    donationsReceived,
    totalDonations,
    warDayWins,
    clan,
}: PlayerClanStatsProps) {
    return (
        <CardContainer ariaLabelledBy="clan-statistics-title">
            <CardHeaderContainer>
                <CardTitle titleId="clan-statistics-title">
                    Clan statistics
                </CardTitle>
                <Image
                    src="/clan.png"
                    alt="Clan illustration"
                    width={216}
                    height={216}
                    className="w-10"
                />
            </CardHeaderContainer>

            <ul className="list">
                <ListRow
                    label="Clan name"
                    value={clan.name ?? "You need to join a clan"}
                />
                <ListRow
                    label="Clan tag"
                    value={clan.tag ?? "You need to join a clan"}
                />
                <ListRow label="Role" value={role} />
                <ListRow label="Donations this week" value={donations} />
                <ListRow
                    label="Total donations received"
                    value={donationsReceived}
                />
                <ListRow label="Total donations" value={totalDonations} />
                <ListRow label="War day wins" value={warDayWins} />
            </ul>
        </CardContainer>
    );
}
