import { getClan } from "@/lib/serverMethod/clan";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;
    const clan = await getClan(tag);
    console.log("🚀 ~ page ~ clan:", clan);

    return <div>page</div>;
}
