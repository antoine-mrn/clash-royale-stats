import TopClanRank from "@/components/clan/TopClanRank";
import TopPlayerRank from "@/components/player/TopPlayerRank";
import SearchForm from "@/components/search/SearchForm";
import { getClanRanking } from "@/lib/serverMethod/clanRanking";
import { getPlayerRanking } from "@/lib/serverMethod/playerRanking";

export default async function Home() {
    const [playerLeaderboard, clanLeaderboard] = await Promise.all([
        getPlayerRanking(),
        getClanRanking(),
    ]);
    console.log("🚀 ~ Home ~ clanLeaderboard:", clanLeaderboard);

    return (
        <div className="space-y-6">
            <div
                className="hero min-h-72 max-w-8xl mx-auto"
                style={{
                    backgroundImage: "url(../banner-img.jpg)",
                    backgroundPosition: "top",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-50 text-center">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">
                            Clash Royale statistics
                        </h1>
                        <p className="mb-5">
                            Track all your Clash Royale stats
                        </p>
                    </div>
                </div>
            </div>

            <SearchForm />

            <section className="max-w-6xl grid justify-center gap-8 px-6 w-full mx-auto md:grid-cols-2">
                <TopPlayerRank playerLeaderboard={playerLeaderboard} />
                <TopClanRank clanLeaderboard={clanLeaderboard} />
            </section>
        </div>
    );
}
