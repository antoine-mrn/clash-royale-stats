import { Clan, ClanFromApi } from "@/types/clan";
import { fetchApi } from "../fetchApi";
import { mapClan } from "../mapper/mapClan";
import { cache } from "react";

export const getClan = cache(async function getClan(
    tag: string
): Promise<Clan> {
    const response = await fetchApi(`/clans/%23${tag}`);
    const ClanFromApi: ClanFromApi = await response.json();

    return mapClan(ClanFromApi);
});
