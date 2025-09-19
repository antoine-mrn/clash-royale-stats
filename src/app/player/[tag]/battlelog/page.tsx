import BattlelogList from "@/components/battlelog/BattlelogList";
import getPlayerBattlelog from "@/lib/serverMethod/playerBattlelog";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const playerBattlelog = await getPlayerBattlelog(tag);

    return (
        <div className="mt-6 space-y-6">
            <BattlelogList playerBattlelog={playerBattlelog} />
        </div>
    );
}
