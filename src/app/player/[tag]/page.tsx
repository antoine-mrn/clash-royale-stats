import PlayerBadges from "@/components/player/PlayerBadges";
import PlayerClanStats from "@/components/player/PlayerClanStats";
import PlayerCurrentDeck from "@/components/player/PlayerCurrentDeck";
import PlayerHero from "@/components/player/PlayerHero";
import PlayerLeagueResult from "@/components/player/PlayerLeagueResult";
import PlayerRecentBattlePreview from "@/components/player/PlayerRecentBattlePreview";
import PlayerStats from "@/components/player/PlayerStats";
import SearchForm from "@/components/search/SearchForm";
import { getPlayer } from "@/lib/serverMethod/player";
import getPlayerBattlelog from "@/lib/serverMethod/playerBattlelog";

export const revalidate = 60;

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const [player, playerBattlelog] = await Promise.all([
        getPlayer(tag),
        getPlayerBattlelog(tag),
    ]);

    return (
        <div className="mt-6 space-y-6">
            <SearchForm />

            <PlayerHero
                name={player.name}
                level={player.expLevel}
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
                    challengeMaxWins={player.challengeMaxWins}
                    challengeCardsWon={player.challengeCardsWon}
                />

                <PlayerClanStats
                    clan={player.clan}
                    role={player.role}
                    donations={player.donations}
                    donationsReceived={player.donationsReceived}
                    totalDonations={player.totalDonations}
                    warDayWins={player.warDayWins}
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

                <PlayerRecentBattlePreview battlelog={playerBattlelog} />
            </section>
        </div>
    );
}
