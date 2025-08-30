import BattlelogList from "@/components/battlelog/BattlelogList";
import PlayerHero from "@/components/player/PlayerHero";
import SearchForm from "@/components/search/SearchForm";
import getPlayerBattlelog from "@/lib/serverMethod/playerBattlelog";
import { mapHeroBannerPlayer } from "@/lib/mapper/mapPlayer";
import { getPlayer } from "@/lib/serverMethod/player";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const [player, playerBattlelog] = await Promise.all([
        getPlayer(tag),
        getPlayerBattlelog(tag),
    ]);

    const playerHeroBanner = mapHeroBannerPlayer(player);

    return (
        <div className="mt-6 space-y-6">
            <SearchForm />

            <PlayerHero
                name={playerHeroBanner.name}
                level={playerHeroBanner.level}
                tag={playerHeroBanner.tag}
                clanName={playerHeroBanner.clan.name}
            />

            <BattlelogList playerBattlelog={playerBattlelog} />
        </div>
    );
}
