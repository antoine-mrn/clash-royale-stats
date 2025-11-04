"use client";

import CardContainer from "@/components/shared/CardContainer";
import CardHeaderContainer from "@/components/shared/CardHeaderContainer";
import CardTitle from "@/components/ui/CardTitle";
import useLocalStorage from "@/hooks/useLocalStorage";
import Image from "next/image";
import FavoritesList from "@/components/favorites/FavoritesList";
import useIsMounted from "@/hooks/useIsMounted";

export default function FavoritesPage() {
    const isMounted = useIsMounted();
    const [favoritePlayers, updateFavoritesPlayer] =
        useLocalStorage("favoritesPlayer");
    const [favoriteClans, updateFavoritesClan] =
        useLocalStorage("favoritesClan");

    function handleDelete(type: "player" | "clan", tag: string) {
        const listStorage = {
            player: { data: favoritePlayers, update: updateFavoritesPlayer },
            clan: { data: favoriteClans, update: updateFavoritesClan },
        };

        const { data, update } = listStorage[type];
        update(data.filter((item) => item.tag !== tag));
    }

    if (!isMounted) return null;

    return (
        <div className="min-h-screen p-4 lg:p-8 flex flex-col gap-6 lg:flex-row">
            <CardContainer
                ariaLabelledBy="favorites-player-title"
                className="flex-1"
            >
                <CardHeaderContainer>
                    <CardTitle titleId="favorites-player-title">
                        Favorites player
                    </CardTitle>
                    <Image
                        src="/king.png"
                        alt="King icon"
                        height={640}
                        width={640}
                        className="w-10"
                    />
                </CardHeaderContainer>

                <ul className="list">
                    {favoritePlayers.length > 0 ? (
                        <FavoritesList
                            type="player"
                            favoritesList={favoritePlayers}
                            onDelete={handleDelete}
                        />
                    ) : (
                        <li className="p-4 text-sm opacity-70 italic">
                            No Favorite player.
                        </li>
                    )}
                </ul>
            </CardContainer>

            <CardContainer
                ariaLabelledBy="favorites-clan-title"
                className="flex-1"
            >
                <CardHeaderContainer>
                    <CardTitle titleId="favorites-clan-title">
                        Favorites clan
                    </CardTitle>
                    <Image
                        src="/clan.png"
                        alt="Clan icon"
                        height={216}
                        width={216}
                        className="w-10"
                    />
                </CardHeaderContainer>

                <ul className="list">
                    {favoriteClans.length > 0 ? (
                        <FavoritesList
                            type="clan"
                            favoritesList={favoriteClans}
                            onDelete={handleDelete}
                        />
                    ) : (
                        <li className="p-4 text-sm opacity-70 italic">
                            No favorite clan.
                        </li>
                    )}
                </ul>
            </CardContainer>
        </div>
    );
}
