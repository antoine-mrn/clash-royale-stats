import BattleCard from "@/components/battlelog/BattleCard";
import DeckList from "@/components/deck/DeckList";
import SearchForm from "@/components/search/SearchForm";
import CardContainer from "@/components/shared/CardContainer";
import getPlayerBattlelog from "@/lib/serverMethod/playerBattlelog";
import { getAverageElixir, getCycleElixirCost } from "@/utils/deckStats";
import { splitString } from "@/utils/stringMethods";
import Image from "next/image";
import Link from "next/link";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const playerBattlelog = await getPlayerBattlelog(tag);
    console.log("🚀 ~ playerBattlelog:", playerBattlelog[0]);

    return (
        <div className="mt-6 space-y-6">
            <SearchForm />

            <section className="max-w-6xl px-6 mx-auto">
                <CardContainer className="max-w-6xl p-6 mx-auto">
                    <ul className="space-y-4">
                        {playerBattlelog.map((battle, index) => (
                            <li
                                key={index}
                                className="rounded-box shadow-sm border border-neutral-100 py-4"
                            >
                                <BattleCard battle={battle} />
                            </li>
                        ))}
                    </ul>
                </CardContainer>
            </section>
        </div>
    );
}
