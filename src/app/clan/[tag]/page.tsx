import ClanHero from "@/components/clan/ClanHero";
import SearchForm from "@/components/search/SearchForm";
import { getClan } from "@/lib/serverMethod/clan";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;
    const clan = await getClan(tag);
    console.log("🚀 ~ page ~ clan:", clan);

    return (
        <div className="mt-6 space-y-6">
            <SearchForm />

            <ClanHero name={clan.name} tag={clan.tag} />
        </div>
    );
}
