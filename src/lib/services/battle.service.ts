import { BattleResult } from "@/types/battle.interface";

export const getBattleResult = (
    teamCrowns: number,
    opponentCrowns: number
): BattleResult => {
    if (teamCrowns > opponentCrowns) return "win";
    if (teamCrowns < opponentCrowns) return "lose";
    return "draw";
};
