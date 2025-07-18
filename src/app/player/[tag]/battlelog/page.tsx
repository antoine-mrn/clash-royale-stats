import getPlayerBattlelog from "@/lib/serverMethod/playerBattlelog";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const playerBattlelog = await getPlayerBattlelog(tag);
    console.log("🚀 ~ playerBattlelog:", playerBattlelog);

    return <div>page</div>;
}
