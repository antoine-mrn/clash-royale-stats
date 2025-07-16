import PlayerHero from "@/components/player/PlayerHero";
import SearchForm from "@/components/search/SearchForm";
import CardContainer from "@/components/shared/CardContainer";
import ListRow from "@/components/shared/ListRow";
import CardTitle from "@/components/ui/CardTitle";
import { getPlayer } from "@/lib/serverMethod/player";
import { getAverageElixir, getCycleElixirCost } from "@/utils/deckStats";
import { splitString } from "@/utils/stringMethods";
import Image from "next/image";

export default async function page({ params }: { params: { tag: string } }) {
    const { tag } = await params;
    const player = await getPlayer(tag);
    // console.log("🚀 ~ page ~ player:", player.currentDeck);

    return (
        <div className="mt-6 space-y-6">
            <SearchForm />

            <PlayerHero
                name={player.name}
                tag={player.tag}
                clanName={player.clan?.name ?? "No clan"}
            />

            <section className="max-w-6xl grid justify-center gap-8 px-6 w-full mx-auto md:grid-cols-2">
                <CardContainer>
                    <CardTitle>Fighter statistics</CardTitle>

                    <ul className="list">
                        <ListRow label="Wins" value={player.wins} />
                        <ListRow label="Losses" value={player.losses} />
                        <ListRow
                            label="Battlecount"
                            value={player.battleCount}
                        />
                        <ListRow
                            label="Three crown wins"
                            value={player.threeCrownWins}
                        />
                        <ListRow
                            label="Star points"
                            value={player.starPoints}
                        />
                        <ListRow
                            label="Total experience"
                            value={player.totalExpPoints}
                        />
                    </ul>
                </CardContainer>

                <CardContainer>
                    <CardTitle>Clan statistics</CardTitle>

                    <ul className="list">
                        {player.clan ? (
                            <>
                                <ListRow
                                    label="Clan name"
                                    value={player.clan?.name}
                                />
                                <ListRow
                                    label="Clan tag"
                                    value={player.clan?.tag}
                                />
                                <ListRow label="Role" value={player.role} />
                                <ListRow
                                    label="Donations this week"
                                    value={player.donations}
                                />
                                <ListRow
                                    label="Total donations"
                                    value={player.totalDonations}
                                />
                            </>
                        ) : (
                            <p>
                                You'll see your statistics when you'll join a
                                clan
                            </p>
                        )}
                    </ul>
                </CardContainer>

                <CardContainer>
                    <CardTitle>Badges</CardTitle>

                    <ul className="grid grid-cols-4">
                        {player.badges.slice(0, 10).map((badge) => (
                            <li
                                key={badge.name}
                                className="tooltip"
                                data-tip={splitString(badge.name)}
                            >
                                <Image
                                    src={badge.iconUrls.large || ""}
                                    alt={`${badge.name} image`}
                                    width={512}
                                    height={512}
                                />
                            </li>
                        ))}
                    </ul>

                    <button className="btn btn-soft btn-secondary my-4 mx-2">
                        View all your badges
                    </button>
                </CardContainer>

                <CardContainer>
                    <CardTitle>Current deck</CardTitle>
                    <ul className="grid grid-cols-4 px-4">
                        {player.currentDeck.map((card, index) => (
                            <li key={card.id} className="">
                                <Image
                                    src={
                                        card.iconUrls.evolutionMedium &&
                                        index < 2
                                            ? card.iconUrls.evolutionMedium
                                            : card.iconUrls.medium
                                    }
                                    alt={`${card.name} image`}
                                    width={285}
                                    height={420}
                                />
                            </li>
                        ))}
                    </ul>

                    <p>{getAverageElixir(player.currentDeck)}</p>
                    <p>{getCycleElixirCost(player.currentDeck)}</p>
                </CardContainer>
            </section>
        </div>
    );
}
