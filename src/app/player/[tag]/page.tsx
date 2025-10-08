import PlayerBadges from "@/components/player/PlayerBadges";
import PlayerClanStats from "@/components/player/PlayerClanStats";
import PlayerCurrentDeck from "@/components/player/PlayerCurrentDeck";
import PlayerLeagueResult from "@/components/player/PlayerLeagueResult";
import PlayerPerformance from "@/components/player/PlayerPerformance";
import PlayerRecentBattlePreview from "@/components/player/PlayerRecentBattlePreview";
import PlayerStats from "@/components/player/PlayerStats";
import { getPlayer } from "@/lib/serverMethod/player";
import getPlayerBattlelog from "@/lib/serverMethod/playerBattlelog";
import { PlayerBattleStats } from "@/types/player.interface";

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

    const playerStats: PlayerBattleStats = {
        battleCount: player.battleCount,
        wins: player.wins,
        losses: player.losses,
        threeCrownWins: player.threeCrownWins,
        winRate: player.winRate,
    };

    return (
        <div className="mt-6 space-y-6">
            <section className="max-w-7xl mx-auto px-6">
                <PlayerPerformance playerStats={playerStats} />
            </section>

            <section className="max-w-7xl grid gap-8 px-6 w-full mx-auto md:justify-center md:grid-cols-2">
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

                <PlayerCurrentDeck
                    deck={player.currentDeck}
                    supportCard={player.currentDeckSupportCards}
                />

                <PlayerRecentBattlePreview
                    battlelog={playerBattlelog}
                    tag={tag}
                />
            </section>
        </div>
    );
}
