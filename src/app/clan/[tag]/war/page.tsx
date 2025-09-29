import { getCurrentRiverRace } from "@/lib/serverMethod/clanWar";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;
    const currentRiverRace = await getCurrentRiverRace(tag);
    console.log("🚀 ~ page ~ currentRiverRace:", currentRiverRace);

    return <div>page</div>;
}
