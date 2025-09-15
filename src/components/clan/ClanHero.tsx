import HeroBannerWrapper from "../shared/HeroBannerWrapper";
import Image from "next/image";

interface ClanHeroProps {
    name: string;
    tag: string;
    clanWarTrophies: number;
}

export default function ClanHero({
    name,
    tag,
    clanWarTrophies,
}: ClanHeroProps) {
    return (
        <HeroBannerWrapper
            backgroundImage={"url(../clan-banner.png)"}
            imageClassName="bg-center"
        >
            <div className="">
                <p className="text-primary font-extrabold text-4xl text-shadow-lg/30 md:text-6xl">
                    {name}
                </p>
                <p className="text-neutral-content">{tag}</p>

                <div className="badge badge-success mt-4 relative">
                    <Image
                        src="/clan.png"
                        alt="Clan illustration"
                        width={216}
                        height={216}
                        className="w-10 absolute -left-2"
                    />

                    <p className="pl-6 pr-1 font-semibold">{clanWarTrophies}</p>
                </div>
            </div>
        </HeroBannerWrapper>
    );
}
