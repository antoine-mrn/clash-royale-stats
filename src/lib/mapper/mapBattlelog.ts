import { Battle, BattleFromApi } from "@/types/battle";
import { formatDate } from "@/utils/dateMethods";
import { splitString } from "@/utils/stringMethods";
import { getAverageElixir, getCycleElixirCost } from "../services/deck.service";
import { getBattleResult } from "../services/battle.service";
import { getNewLevel } from "../services/card.service";

export function mapBattlelog(battleFromApi: BattleFromApi): Battle {
    return {
        type: splitString(battleFromApi.type),
        battleTime: formatDate(battleFromApi.battleTime),
        arena: battleFromApi.arena.name,
        result: getBattleResult(
            battleFromApi.team[0].crowns,
            battleFromApi.opponent[0].crowns
        ),
        team: {
            crowns: battleFromApi.team[0].crowns,
            player: battleFromApi.team.map((player) => ({
                name: player.name,
                tag: player.tag,
                clanName: player.clan?.name || "No clan",
                clanTag: player.clan?.tag ?? undefined,
                startingTrophies: player.startingTrophies ?? undefined,
                trophyChange: player.trophyChange ?? undefined,
                deck: {
                    cards: player.cards,
                    elixirFourCardCycle: getCycleElixirCost(
                        player.cards.map((card) => card.elixirCost)
                    ),
                    averageElixir: getAverageElixir(
                        player.cards.map((card) => card.elixirCost)
                    ),
                },
                supportCard: player.supportCards[0] && {
                    ...player.supportCards[0],
                    level: getNewLevel(
                        player.supportCards[0].level,
                        player.supportCards[0].rarity
                    ),
                },
                elixirLeaked: battleFromApi.opponent[0].elixirLeaked,
            })),
        },
        opponent: {
            crowns: battleFromApi.opponent[0].crowns,
            player: battleFromApi.opponent.map((player) => ({
                name: player.name,
                tag: player.tag,
                clanName: player.clan?.name || "No clan",
                clanTag: player.clan?.tag ?? undefined,
                startingTrophies: player.startingTrophies ?? undefined,
                trophyChange: player.trophyChange ?? undefined,
                deck: {
                    cards: player.cards,
                    elixirFourCardCycle: getCycleElixirCost(
                        player.cards.map((card) => card.elixirCost)
                    ),
                    averageElixir: getAverageElixir(
                        player.cards.map((card) => card.elixirCost)
                    ),
                },
                supportCard: player.supportCards[0] && {
                    ...player.supportCards[0],
                    level: getNewLevel(
                        player.supportCards[0].level,
                        player.supportCards[0].rarity
                    ),
                },
                elixirLeaked: battleFromApi.opponent[0].elixirLeaked,
            })),
        },
    };
}
