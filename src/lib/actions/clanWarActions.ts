"use server";

import { getRiverRaceHistory } from "@/lib/serverMethod/clanWar";
import { RiverRaceLog } from "@/types/riverRace";

export async function loadMoreRiverRaceHistory(
    tag: string,
    limit: number,
    after?: string
): Promise<RiverRaceLog> {
    return await getRiverRaceHistory(tag, limit, after);
}
