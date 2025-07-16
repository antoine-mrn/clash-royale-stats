import { ClanPreview } from "@/types/clan.interface";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import ListRow from "../shared/ListRow";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";

interface PlayerClanStatsProps {
    role: string;
    donations: number;
    totalDonations: number;
    clan?: ClanPreview;
}

export default function PlayerClanStats({
    role,
    donations,
    totalDonations,
    clan,
}: PlayerClanStatsProps) {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <CardTitle>Clan statistics</CardTitle>
                <Image
                    src="/clan.png"
                    alt="Clan illustration"
                    width={216}
                    height={216}
                    className="w-10"
                />
            </CardHeaderContainer>

            <ul className="list">
                {clan ? (
                    <>
                        <ListRow label="Clan name" value={clan.name} />
                        <ListRow label="Clan tag" value={clan.tag} />
                        <ListRow label="Role" value={role} />
                        <ListRow
                            label="Donations this week"
                            value={donations}
                        />
                        <ListRow
                            label="Total donations"
                            value={totalDonations}
                        />
                    </>
                ) : (
                    <li>You'll see your statistics when you'll join a clan</li>
                )}
            </ul>
        </CardContainer>
    );
}
