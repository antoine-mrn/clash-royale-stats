import HeroBannerWrapper from "../shared/HeroBannerWrapper";
import Image from "next/image";

interface ClanHeroProps {
    name: string;
    badgeUrl: string;
    tag: string;
    clanWarTrophies: number;
}

export default function ClanHero({
    name,
    badgeUrl,
    tag,
    clanWarTrophies,
}: ClanHeroProps) {
    return (
        <HeroBannerWrapper
            backgroundImage={"url(../clan-banner.png)"}
            imageClassName="bg-center"
        >
            <div>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 relative">
                        <Image
                            src={badgeUrl}
                            alt={`${name} badge`}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-primary font-extrabold text-4xl text-shadow-lg/30 md:text-6xl">
                        {name}
                    </p>
                </div>
                <p className="text-neutral-content">{tag}</p>

                <div className="badge badge-success mt-4 relative">
                    <Image
                        src="/clan.png"
                        alt="Clan illustration"
                        width={216}
                        height={216}
                        className="w-12 absolute -left-2"
                    />

                    <p className="pl-8 pr-1 font-semibold text-lg">
                        {clanWarTrophies}
                    </p>
                </div>
            </div>
        </HeroBannerWrapper>
    );
}
