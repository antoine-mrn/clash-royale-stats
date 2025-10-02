import CardContainer from "@/components/shared/CardContainer";
import CardHeaderContainer from "@/components/shared/CardHeaderContainer";
import CardTitle from "@/components/ui/CardTitle";
import RankMask from "@/components/ui/RankMask";
import { getCurrentRiverRace } from "@/lib/serverMethod/clanWar";
import { sanitizeTag } from "@/utils/stringMethods";
import Image from "next/image";
import Link from "next/link";

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;
    const currentRiverRace = await getCurrentRiverRace(tag);
    console.log("🚀 ~ page ~ currentRiverRace:", currentRiverRace);

    return (
        <div className="mt-6 space-y-6">
            <section className="max-w-7xl grid grid-cols-1 justify-center gap-8 px-6 w-full mx-auto md:grid-cols-2">
                <CardContainer>
                    <CardHeaderContainer>
                        <CardTitle>Clan ranking</CardTitle>
                        <Image
                            src="/clan.png"
                            alt="Clan illustration"
                            width={216}
                            height={216}
                            className="w-10"
                        />
                    </CardHeaderContainer>

                    <ul className="list">
                        {currentRiverRace.clans.map((clan) => (
                            <li key={clan.tag} className="list-row">
                                <RankMask rank={clan.rank} />
                                <div className="flex items-center">
                                    <div className="w-8 h-8 relative">
                                        <Image
                                            src={clan.badgeUrl}
                                            alt={`${clan.name} badge`}
                                            fill
                                            sizes="64px"
                                            className="object-contain"
                                        />
                                    </div>
                                    <Link
                                        href={`/clan/${sanitizeTag(clan.tag)}`}
                                        className="font-bold link link-hover hover:link-primary"
                                    >
                                        {clan.name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContainer>
            </section>
        </div>
    );
}
