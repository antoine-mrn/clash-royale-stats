import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import ListRow from "../shared/ListRow";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";

interface PlayerStatsProps {
    wins: number;
    losses: number;
    battleCount: number;
    threeCrownWins: number;
    starPoints: number;
    totalExpPoints: number;
    challengeMaxWins: number;
    challengeCardsWon: number;
}

export default function PlayerStats({
    wins,
    losses,
    battleCount,
    threeCrownWins,
    starPoints,
    totalExpPoints,
    challengeMaxWins,
    challengeCardsWon,
}: PlayerStatsProps) {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <CardTitle>Fighter statistics</CardTitle>
                <Image
                    src="/battle.png"
                    alt="Battle illustration"
                    width={216}
                    height={216}
                    className="w-10"
                />
            </CardHeaderContainer>

            <ul className="list">
                <ListRow label="Wins" value={wins} />
                <ListRow label="Losses" value={losses} />
                <ListRow label="Battlecount" value={battleCount} />
                <ListRow label="Three crown wins" value={threeCrownWins} />
                <ListRow label="Star points" value={starPoints} />
                <ListRow label="Total experience" value={totalExpPoints} />
                <ListRow label="Challenge max wins" value={challengeMaxWins} />
                <ListRow
                    label="Challenge cards won"
                    value={challengeCardsWon}
                />
            </ul>
        </CardContainer>
    );
}
