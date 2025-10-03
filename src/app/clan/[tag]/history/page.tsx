import CardContainer from "@/components/shared/CardContainer";
import CardHeaderContainer from "@/components/shared/CardHeaderContainer";
import CardTitle from "@/components/ui/CardTitle";
import RankMask from "@/components/ui/RankMask";
import { getRiverRaceHistory } from "@/lib/serverMethod/clanWar";
import Image from "next/image";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const riverRaceHistory = await getRiverRaceHistory(tag, 2);
    console.log("🚀 ~ page ~ riverRaceHistory:", riverRaceHistory);
    return (
        <section className="max-w-7xl space-y-8 px-6 w-full mx-auto mt-6">
            {riverRaceHistory.items.map((riverRace, index) => (
                <CardContainer key={index}>
                    <CardHeaderContainer>
                        <CardTitle>
                            River race {riverRace.seasonId} - week{" "}
                            {riverRace.sectionIndex + 1}
                        </CardTitle>
                        <Image
                            src="/clan.png"
                            alt="Clan illustration"
                            width={216}
                            height={216}
                            className="w-10"
                        />
                    </CardHeaderContainer>
                    <ul className="list">
                        {riverRace.standings.map((standing) => (
                            <li key={standing.clan.tag} className="list-row">
                                {/* <RankMask rank={standing.rank} /> */}
                                <div className="collapse collapse-arrow join-item">
                                    <input
                                        type="radio"
                                        name="my-accordion-4"
                                        defaultChecked
                                    />
                                    <div className="collapse-title font-semibold">
                                        How do I create an account?
                                    </div>
                                    <div className="collapse-content text-sm">
                                        Click the "Sign Up" button in the top
                                        right corner and follow the registration
                                        process.
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContainer>
            ))}
        </section>
    );
}
