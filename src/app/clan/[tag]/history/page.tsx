import ClanWarList from "@/components/clanWar/ClanWarList";
import { getRiverRaceHistory } from "@/lib/serverMethod/clanWar";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const LIMIT_ITEMS = 3;

    const riverRaceHistory = await getRiverRaceHistory(tag, LIMIT_ITEMS);

    return <ClanWarList tag={tag} initialData={riverRaceHistory} />;
}
