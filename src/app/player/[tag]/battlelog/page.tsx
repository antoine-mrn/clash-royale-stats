import DeckList from "@/components/deck/DeckList";
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
        <CardContainer className="max-w-6xl p-6 mx-auto">
            <ul className="space-y-4">
                {playerBattlelog.map((battle, index) => (
                    <li
                        key={index}
                        className="rounded-box shadow-sm border border-neutral-100 py-4"
                    >
                        {/* Top content */}
                        <h2 className="text-center font-semibold text-2xl">
                            {splitString(battle.type)}
                        </h2>
                        <div className="flex items-center justify-center">
                            <Image
                                src="/crown.png"
                                alt="Blue crown illustration"
                                width={400}
                                height={300}
                                className="w-18"
                            />

                            <p className="font-semibold">
                                {battle.team[0].crowns}
                            </p>
                            <span className="px-1">-</span>
                            <p className="font-semibold">
                                {battle.opponent[0].crowns}
                            </p>
                            <Image
                                src="/red-crown.png"
                                alt="Blue crown illustration"
                                width={400}
                                height={300}
                                className="w-16"
                            />
                        </div>

                        {/* Battle details */}
                        <div className="flex w-full p-4">
                            <div className="card bg-blue-50 rounded-box grid grow">
                                <div className="p-4 flex flex-col">
                                    <Link
                                        href={`/player/${battle.team[0].tag}`}
                                        className="font-semibold hover:text-primary"
                                    >
                                        {battle.team[0].name}
                                    </Link>
                                    <Link
                                        href={`/clan/${battle.team[0].clan.tag}`}
                                        className="text-blue-500 hover:text-blue-800"
                                    >
                                        {battle.team[0].clan.name}
                                    </Link>
                                    {battle.team[0].startingTrophies && (
                                        <p className="text-lg font-semibold text-neutral-900 flex items-center gap-2 mt-2">
                                            {battle.team[0].startingTrophies}{" "}
                                            <span
                                                className={`badge ${
                                                    battle.team[0]
                                                        .trophyChange &&
                                                    battle.team[0]
                                                        .trophyChange > 0
                                                        ? "badge-primary"
                                                        : "badge-error"
                                                }`}
                                            >
                                                {battle.team[0].trophyChange &&
                                                    (battle.team[0]
                                                        .trophyChange > 0
                                                        ? "+"
                                                        : "") +
                                                        battle.team[0]
                                                            .trophyChange}
                                            </span>
                                        </p>
                                    )}
                                </div>
                                <DeckList
                                    deck={battle.team[0].cards}
                                    className="w-fit"
                                />
                                <div className="px-4 pb-4 flex items-center gap-2">
                                    {battle.team[0].supportCards[0] && (
                                        <>
                                            <Image
                                                src={
                                                    battle.team[0]
                                                        .supportCards[0]
                                                        ?.iconUrls.medium
                                                }
                                                alt="Support card illustration"
                                                width={285}
                                                height={420}
                                                className="w-16"
                                            />
                                            <div>
                                                <p className="text-sm font-semibold text-neutral-600">
                                                    {
                                                        battle.team[0]
                                                            .supportCards[0]
                                                            .name
                                                    }
                                                </p>
                                                <p className="text-sm text-neutral-500">
                                                    {`Level ${battle.team[0].supportCards[0].level}`}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="mx-2 mt-auto mb-4 flex justify-center bg-base-300 gap-6 px-4 rounded-lg">
                                    <div className="flex items-center">
                                        <p className="font-bold text-sm">
                                            {getAverageElixir(
                                                battle.team[0].cards
                                            )}
                                        </p>
                                        <Image
                                            src="/elixir.png"
                                            alt="Elixir image"
                                            width={288}
                                            height={288}
                                            className="w-10"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <p className="font-bold text-sm">
                                            {getCycleElixirCost(
                                                battle.team[0].cards
                                            )}
                                        </p>
                                        <Image
                                            src="/four-card-cycle.png"
                                            alt="Four card cycle image"
                                            width={288}
                                            height={288}
                                            className="w-10"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <p className="font-bold text-sm">
                                            {battle.team[0].elixirLeaked}
                                        </p>
                                        <Image
                                            src="/elixir-leaked.png"
                                            alt="Elixir leaked image"
                                            width={288}
                                            height={288}
                                            className="w-10"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="divider divider-horizontal">VS</div>
                            <div className="card bg-red-50 rounded-box grid grow">
                                <div className="p-4 place-self-end">
                                    <p>{battle.opponent[0].name}</p>
                                    <p>{battle.opponent[0]?.clan?.name}</p>
                                    {battle.opponent[0].startingTrophies && (
                                        <p>
                                            {
                                                battle.opponent[0]
                                                    .startingTrophies
                                            }{" "}
                                            <span
                                                className={`badge ${
                                                    battle.opponent[0]
                                                        .trophyChange &&
                                                    battle.opponent[0]
                                                        .trophyChange > 0
                                                        ? "badge-primary"
                                                        : "badge-error"
                                                }`}
                                            >
                                                {
                                                    battle.opponent[0]
                                                        .trophyChange
                                                }
                                            </span>
                                        </p>
                                    )}
                                </div>
                                <DeckList
                                    deck={battle.opponent[0].cards}
                                    className="w-fit"
                                />
                                <div className="px-4 pb-4 flex items-center gap-2">
                                    {battle.team[0].supportCards[0] && (
                                        <>
                                            <Image
                                                src={
                                                    battle.team[0]
                                                        .supportCards[0]
                                                        ?.iconUrls.medium
                                                }
                                                alt="Support card illustration"
                                                width={285}
                                                height={420}
                                                className="w-16"
                                            />
                                            <div>
                                                <p className="text-sm font-semibold text-neutral-600">
                                                    {
                                                        battle.team[0]
                                                            .supportCards[0]
                                                            .name
                                                    }
                                                </p>
                                                <p className="text-sm text-neutral-500">
                                                    {`Level ${battle.team[0].supportCards[0].level}`}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="mx-2 mt-auto mb-4 flex justify-center bg-base-300 gap-6 px-4 rounded-lg">
                                    <div className="flex items-center">
                                        <p className="font-bold text-sm">
                                            {getAverageElixir(
                                                battle.team[0].cards
                                            )}
                                        </p>
                                        <Image
                                            src="/elixir.png"
                                            alt="Elixir image"
                                            width={288}
                                            height={288}
                                            className="w-10"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <p className="font-bold text-sm">
                                            {getCycleElixirCost(
                                                battle.team[0].cards
                                            )}
                                        </p>
                                        <Image
                                            src="/four-card-cycle.png"
                                            alt="Four card cycle image"
                                            width={288}
                                            height={288}
                                            className="w-10"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <p className="font-bold text-sm">
                                            {battle.team[0].elixirLeaked}
                                        </p>
                                        <Image
                                            src="/elixir-leaked.png"
                                            alt="Elixir leaked image"
                                            width={288}
                                            height={288}
                                            className="w-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </CardContainer>
    );
}
