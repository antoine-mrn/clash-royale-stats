import Badge from "../ui/Badge";
import RankMask from "../ui/RankMask";
import Image from "next/image";
import { RiverRaceClan } from "@/types/riverRace.interface";
import TagLink from "../shared/TagLink";

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
                            sizes="32px"
                            className="object-contain"
                        />
                    </div>
                    <TagLink type="clan" tag={clan.tag}>
                        {clan.name}
                    </TagLink>
                </div>
                <div className="flex gap-4 sm:ml-auto">
                    <Badge
                        badgeUrl="/assets/period-points-icon.webp"
                        alt="Period points icon"
                        label={clan.fame}
                        badgeColor="success"
                    />

                    <Badge
                        badgeUrl="/assets/repair-icon.webp"
                        alt="Repair boat icon"
                        label={clan.repairPoints}
                        badgeColor="info"
                    />
                </div>
            </div>
        </>
    );
}
