import { Player, PlayerFromApi } from "@/types/player.interface";

export function mapPlayer(playerFromApi: PlayerFromApi): Player {
    return {
        name: playerFromApi.name,
        level: playerFromApi.expLevel,
        tag: playerFromApi.tag,
        wins: playerFromApi.wins,
        losses: playerFromApi.losses,
        battleCount: playerFromApi.battleCount,
        threeCrownWins: playerFromApi.threeCrownWins,
        starPoint: playerFromApi.starPoints,
        totalExpPoints: playerFromApi.totalExpPoints,
        challengeMaxWins: playerFromApi.challengeMaxWins,
        challengeCardsWon: playerFromApi.challengeCardsWon,
        lastPathOfLegendSeasonResult:
            playerFromApi.lastPathOfLegendSeasonResult,
        bestPathOfLegendSeasonResult:
            playerFromApi.bestPathOfLegendSeasonResult,
        clan: {
            clanName: playerFromApi.clan?.name || undefined,
            role: playerFromApi.role,
            donations: playerFromApi.donations,
            donationsReceived: playerFromApi.donationsReceived,
            totalDonations: playerFromApi.totalDonations,
            warDayWins: playerFromApi.warDayWins,
        },
        badges: playerFromApi.badges.map((badge) => ({
            iconUrls: {
                evolutionMedium: badge.iconUrls.evolutionMedium || undefined,
                medium: badge.iconUrls.medium,
                large: badge.iconUrls.large || undefined,
            },
            name: badge.name,
        })),
        deck: playerFromApi.cards.map((card) => ({
            iconUrls: {
                evolutionMedium: card.iconUrls.evolutionMedium || undefined,
                medium: card.iconUrls.medium,
                large: card.iconUrls.large || undefined,
            },
            elixirCost: card.elixirCost,
        })),
    };
}
