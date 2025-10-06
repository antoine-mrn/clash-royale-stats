import { sanitizeTag } from "@/utils/stringMethods";
import Link from "next/link";
import Badge from "../ui/Badge";
import RankMask from "../ui/RankMask";
import Image from "next/image";
import { RiverRaceClan } from "@/types/riverRace.interface";

export default function ClanWarRow({ clan }: { clan: RiverRaceClan }) {
    return (
        <>
            <RankMask rank={clan.rank} />
            <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
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
                <div className="flex gap-4 sm:ml-auto">
                    <Badge
                        badgeUrl="/period-points-icon.png"
                        alt="Period points icon"
                        label={clan.fame}
                        badgeColor="success"
                    />

                    <Badge
                        badgeUrl="/repair-icon.png"
                        alt="Repair boat illustration"
                        label={clan.repairPoints}
                        badgeColor="info"
                    />
                </div>
            </div>
        </>
    );
}
