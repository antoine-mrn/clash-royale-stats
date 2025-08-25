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
        starPoints: playerFromApi.starPoints,
        totalExpPoints: playerFromApi.totalExpPoints,
        challengeMaxWins: playerFromApi.challengeMaxWins,
        challengeCardsWon: playerFromApi.challengeCardsWon,
        lastPathOfLegendSeasonResult:
            playerFromApi.lastPathOfLegendSeasonResult,
        bestPathOfLegendSeasonResult:
            playerFromApi.bestPathOfLegendSeasonResult,
        clan: {
            name: playerFromApi.clan?.name ?? null,
            tag: playerFromApi.clan?.tag ?? null,
        },
        role: playerFromApi.role,
        donations: playerFromApi.donations,
        donationsReceived: playerFromApi.donationsReceived,
        totalDonations: playerFromApi.totalDonations,
        warDayWins: playerFromApi.warDayWins,
        badges: playerFromApi.badges.map((badge) => ({
            iconUrls: {
                evolutionMedium: badge.iconUrls.evolutionMedium || undefined,
                medium: badge.iconUrls.medium,
                large: badge.iconUrls.large || undefined,
            },
            name: badge.name,
        })),
        currentDeck: playerFromApi.currentDeck.map((card) => ({
            iconUrls: {
                evolutionMedium: card.iconUrls.evolutionMedium || undefined,
                medium: card.iconUrls.medium,
                large: card.iconUrls.large || undefined,
            },
            elixirCost: card.elixirCost,
            id: card.id,
            name: card.name,
        })),
        currentDeckSupportCards: {
            iconUrls: {
                evolutionMedium:
                    playerFromApi.supportCards[0].iconUrls.evolutionMedium ||
                    undefined,
                medium: playerFromApi.supportCards[0].iconUrls.medium,
                large:
                    playerFromApi.supportCards[0].iconUrls.large || undefined,
            },
            id: playerFromApi.supportCards[0].id,
            name: playerFromApi.supportCards[0].name,
            level: playerFromApi.supportCards[0].level,
        },
    };
}
