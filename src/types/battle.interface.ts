import { Arena } from "./arena.interface";
import { GameMode } from "./gameMode.interface";
import { BattlePlayer } from "./player.interface";

export interface Battle {
    arena: Arena;
    battleTime: string;
    deckSelection: string;
    gameMode: GameMode;
    isHostedMatch: boolean;
    isLadderTournament: boolean;
    leagueNumber: number;
    opponent: BattlePlayer[];
    team: BattlePlayer[];
}
