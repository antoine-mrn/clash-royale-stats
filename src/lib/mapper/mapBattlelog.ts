import { Battle, BattleFromApi } from "@/types/battle.interface";
import { getBattleResult } from "@/utils/battleResult";
import { getNewLevel } from "@/utils/card";
import { formatDate } from "@/utils/dateMethods";
import { splitString } from "@/utils/stringMethods";

export function mapBattlelog(battleFromApi: BattleFromApi): Battle {
    return {
        type: splitString(battleFromApi.type),
        battleTime: formatDate(battleFromApi.battleTime),
        arena: battleFromApi.arena.name,
        playerScore: battleFromApi.team[0].crowns,
        opponentScore: battleFromApi.opponent[0].crowns,
        isWinner: getBattleResult(
            battleFromApi.team[0].crowns,
            battleFromApi.opponent[0].crowns
        ),
        player: {
            name: battleFromApi.team[0].name,
            tag: battleFromApi.team[0].tag,
            clanName: battleFromApi.team[0].clan?.name || "No clan",
            clanTag: battleFromApi.team[0].clan?.tag ?? undefined,
            startingTrophies:
                battleFromApi.team[0].startingTrophies ?? undefined,
            trophyChange: battleFromApi.team[0].trophyChange ?? undefined,
            cards: battleFromApi.team[0].cards,
            supportCard: battleFromApi.team[0].supportCards[0] && {
                ...battleFromApi.team[0].supportCards[0],
                level: getNewLevel(
                    battleFromApi.team[0].supportCards[0].level,
                    battleFromApi.team[0].supportCards[0].rarity
                ),
            },
            elixirLeaked: battleFromApi.team[0].elixirLeaked,
        },
        opponent: {
            name: battleFromApi.opponent[0].name,
            tag: battleFromApi.opponent[0].tag,
            clanName: battleFromApi.opponent[0].clan?.name || "No clan",
            clanTag: battleFromApi.opponent[0].clan?.tag ?? undefined,
            startingTrophies:
                battleFromApi.opponent[0].startingTrophies ?? undefined,
            trophyChange: battleFromApi.opponent[0].trophyChange ?? undefined,
            cards: battleFromApi.opponent[0].cards,
            supportCard: battleFromApi.opponent[0].supportCards[0] && {
                ...battleFromApi.opponent[0].supportCards[0],
                level: getNewLevel(
                    battleFromApi.opponent[0].supportCards[0].level,
                    battleFromApi.opponent[0].supportCards[0].rarity
                ),
            },
            elixirLeaked: battleFromApi.opponent[0].elixirLeaked,
        },
    };
}
