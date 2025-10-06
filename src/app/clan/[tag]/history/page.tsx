import ClanParticipantList from "@/components/clanWar/ClanParticipantList";
import ClanWarRow from "@/components/clanWar/ClanWarRow";
import CardContainer from "@/components/shared/CardContainer";
import CardHeaderContainer from "@/components/shared/CardHeaderContainer";
import CardTitle from "@/components/ui/CardTitle";
import { getRiverRaceHistory } from "@/lib/serverMethod/clanWar";
import Image from "next/image";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    const riverRaceHistory = await getRiverRaceHistory(tag, 2);
    console.log(
        "🚀 ~ page ~ riverRaceHistory:",
        riverRaceHistory.items[0].standings[0]
    );
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
                    <ul className="join join-vertical">
                        {riverRace.standings.map((clan) => (
                            <li
                                key={clan.tag}
                                className={`collapse ${
                                    clan.participants ? "collapse-arrow" : ""
                                } join-item border-b border-base-300`}
                            >
                                {clan.participants && (
                                    <input
                                        type="checkbox"
                                        name="my-accordion-4"
                                    />
                                )}
                                <div className="collapse-title font-semibold flex items-center gap-4 p-4 pr-12">
                                    <ClanWarRow clan={clan} />
                                </div>
                                <div className="collapse-content text-sm">
                                    <ClanParticipantList
                                        clanParticipant={clan.participants}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContainer>
            ))}
        </section>
    );
}
