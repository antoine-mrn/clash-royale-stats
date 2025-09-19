import getRecentDecks from "@/lib/serverMethod/deck";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const recentDecks = await getRecentDecks(tag);
    console.log("🚀 ~ page ~ recentDecks:", recentDecks);
    return <div>page</div>;
}
