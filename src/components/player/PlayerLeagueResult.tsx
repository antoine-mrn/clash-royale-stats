import { PathOfLegendResult } from "@/types/result.interface";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import ListRow from "../shared/ListRow";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";

interface PlayerLeagueResultProps {
    lastPathOfLegendSeasonResult: PathOfLegendResult;
    bestPathOfLegendSeasonResult: PathOfLegendResult;
}

export default function PlayerLeagueResult({
    lastPathOfLegendSeasonResult,
    bestPathOfLegendSeasonResult,
}: PlayerLeagueResultProps) {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <CardTitle>League result</CardTitle>
                <Image
                    src="/elo.png"
                    alt="Elo illustration"
                    className="w-10"
                    width={500}
                    height={500}
                />
            </CardHeaderContainer>

            <h3 className="text-lg px-4 font-semibold mt-4">Last season</h3>
            <ul className="list">
                <ListRow
                    label="League"
                    value={lastPathOfLegendSeasonResult.leagueNumber}
                />
                <ListRow
                    label="Trophies"
                    value={lastPathOfLegendSeasonResult.trophies ?? "0"}
                />
                <ListRow
                    label="Rank"
                    value={lastPathOfLegendSeasonResult.rank ?? "Not ranked"}
                />
            </ul>

            <h3 className="text-lg px-4 font-semibold mt-4">Best season</h3>
            <ul className="list">
                <ListRow
                    label="League"
                    value={bestPathOfLegendSeasonResult.leagueNumber}
                />
                <ListRow
                    label="Trophies"
                    value={bestPathOfLegendSeasonResult.trophies ?? "0"}
                />
                <ListRow
                    label="Rank"
                    value={bestPathOfLegendSeasonResult.rank ?? "Not ranked"}
                />
            </ul>
        </CardContainer>
    );
}
