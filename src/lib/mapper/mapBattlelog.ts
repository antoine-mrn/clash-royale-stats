import { Battle, BattleFromApi } from "@/types/battle.interface";

export function mapBattlelog(battleFromApi: BattleFromApi): Battle {
    return {
        type: battleFromApi.type,
        battleTime: battleFromApi.battleTime,
        arena: battleFromApi.arena.name,
        playerScore: battleFromApi.team[0].crowns,
        opponentScore: battleFromApi.opponent[0].crowns,
        player: {
            name: battleFromApi.team[0].name,
            tag: battleFromApi.team[0].tag,
            clanName: battleFromApi.team[0].clan?.name || "No clan",
            clanTag: battleFromApi.team[0].clan?.tag ?? undefined,
            startingTrophies:
                battleFromApi.team[0].startingTrophies ?? undefined,
            trophyChange: battleFromApi.team[0].trophyChange ?? undefined,
            cards: battleFromApi.team[0].cards,
            supportCard: battleFromApi.team[0].supportCards[0],
            elixirLeaked: battleFromApi.team[0].elixirLeaked,
        },
        opponent: {
            name: battleFromApi.opponent[0].name,
            tag: battleFromApi.opponent[0].tag,
            clanName: battleFromApi.opponent[0].clan?.name || "No clan",
            clanTag: battleFromApi.team[0].clan?.tag ?? undefined,
            startingTrophies:
                battleFromApi.opponent[0].startingTrophies ?? undefined,
            trophyChange: battleFromApi.opponent[0].trophyChange ?? undefined,
            cards: battleFromApi.opponent[0].cards,
            supportCard: battleFromApi.opponent[0].supportCards[0],
            elixirLeaked: battleFromApi.opponent[0].elixirLeaked,
        },
    };
}
