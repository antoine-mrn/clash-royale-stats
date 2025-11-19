import { PathOfLegendResult } from "@/types/result";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import ListRow from "../shared/ListRow";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";

interface PlayerLeagueResultProps {
    lastPathOfLegendSeasonResult: PathOfLegendResult;
    bestPathOfLegendSeasonResult: PathOfLegendResult;
    currentPathOfLegendSeasonResult: PathOfLegendResult;
}

export default function PlayerLeagueResult({
    lastPathOfLegendSeasonResult,
    bestPathOfLegendSeasonResult,
    currentPathOfLegendSeasonResult,
}: PlayerLeagueResultProps) {
    return (
        <CardContainer ariaLabelledBy="player-league-result-title">
            <CardHeaderContainer>
                <CardTitle titleId="player-league-result-title">
                    League result
                </CardTitle>
                <Image
                    src="/assets/elo.webp"
                    alt="Elo ranking illustration"
                    className="w-10"
                    width={128}
                    height={128}
                />
            </CardHeaderContainer>

            <article className="mt-4">
                <h3 className="text-lg px-4 font-bold">Current season</h3>
                <ul className="list">
                    <ListRow
                        label="League"
                        value={
                            currentPathOfLegendSeasonResult.leagueNumber ??
                            "No league available"
                        }
                    />
                    <ListRow
                        label="Trophies"
                        value={currentPathOfLegendSeasonResult.trophies ?? "0"}
                    />
                    <ListRow
                        label="Rank"
                        value={
                            currentPathOfLegendSeasonResult.rank ?? "Not ranked"
                        }
                    />
                </ul>
            </article>

            <article className="mt-4">
                <h3 className="text-lg px-4 font-bold">Last season</h3>
                <ul className="list">
                    <ListRow
                        label="League"
                        value={
                            lastPathOfLegendSeasonResult.leagueNumber ??
                            "No league available"
                        }
                    />
                    <ListRow
                        label="Trophies"
                        value={lastPathOfLegendSeasonResult.trophies ?? "0"}
                    />
                    <ListRow
                        label="Rank"
                        value={
                            lastPathOfLegendSeasonResult.rank ?? "Not ranked"
                        }
                    />
                </ul>
            </article>
            <article className="mt-4">
                {" "}
                <h3 className="text-lg px-4 font-bold">Best season</h3>
                <ul className="list">
                    <ListRow
                        label="League"
                        value={
                            bestPathOfLegendSeasonResult.leagueNumber ??
                            "No league available"
                        }
                    />
                    <ListRow
                        label="Trophies"
                        value={bestPathOfLegendSeasonResult.trophies ?? "0"}
                    />
                    <ListRow
                        label="Rank"
                        value={
                            bestPathOfLegendSeasonResult.rank ?? "Not ranked"
                        }
                    />
                </ul>
            </article>
        </CardContainer>
    );
}
