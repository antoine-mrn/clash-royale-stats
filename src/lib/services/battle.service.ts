import { BattleResult } from "@/types/battle";

export const getBattleResult = (
    teamCrowns: number,
    opponentCrowns: number
): BattleResult => {
    if (teamCrowns > opponentCrowns) return "win";
    if (teamCrowns < opponentCrowns) return "lose";
    return "draw";
};
