import PlayerBadges from "@/components/player/PlayerBadges";
import PlayerClanStats from "@/components/player/PlayerClanStats";
import PlayerCurrentDeck from "@/components/player/PlayerCurrentDeck";
import PlayerHero from "@/components/player/PlayerHero";
import PlayerLeagueResult from "@/components/player/PlayerLeagueResult";
import PlayerStats from "@/components/player/PlayerStats";
import SearchForm from "@/components/search/SearchForm";
import CardContainer from "@/components/shared/CardContainer";
import CardHeaderContainer from "@/components/shared/CardHeaderContainer";
import ListRow from "@/components/shared/ListRow";
import CardTitle from "@/components/ui/CardTitle";
import { getPlayer } from "@/lib/serverMethod/player";
import getPlayerBattlelog from "@/lib/serverMethod/playerBattlelog";
import { getAverageElixir, getCycleElixirCost } from "@/utils/deckStats";
import { splitString } from "@/utils/stringMethods";
import Image from "next/image";

export default async function page({ params }: { params: { tag: string } }) {
    const { tag } = await params;
    const player = await getPlayer(tag);
    const playerBattlelog = await getPlayerBattlelog(tag);
    console.log("🚀 ~ page ~ playerBattlelog:", playerBattlelog);

    return (
        <div className="mt-6 space-y-6">
            <SearchForm />

            <PlayerHero
                name={player.name}
                tag={player.tag}
                clanName={player.clan?.name ?? "No clan"}
            />

            <section className="max-w-6xl grid justify-center gap-8 px-6 w-full mx-auto md:grid-cols-2">
                <PlayerStats
                    wins={player.wins}
                    losses={player.losses}
                    battleCount={player.battleCount}
                    threeCrownWins={player.threeCrownWins}
                    starPoints={player.starPoints}
                    totalExpPoints={player.totalExpPoints}
                />

                <PlayerClanStats
                    clan={player.clan}
                    role={player.role}
                    donations={player.donations}
                    totalDonations={player.totalDonations}
                />

                <PlayerLeagueResult
                    lastPathOfLegendSeasonResult={
                        player.lastPathOfLegendSeasonResult
                    }
                    bestPathOfLegendSeasonResult={
                        player.bestPathOfLegendSeasonResult
                    }
                />

                <PlayerBadges badges={player.badges} />

                <PlayerCurrentDeck deck={player.currentDeck} />
            </section>
        </div>
    );
}
