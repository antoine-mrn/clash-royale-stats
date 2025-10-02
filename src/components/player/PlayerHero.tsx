import Image from "next/image";
import Link from "next/link";
import HeroBannerWrapper from "../shared/HeroBannerWrapper";
import { sanitizeTag } from "@/utils/stringMethods";
interface PlayerHeroProps {
    name: string;
    level: number;
    tag: string;
    clanName: string | null;
    clanTag: string | null;
}

export default function PlayerHero({
    name,
    level,
    tag,
    clanName,
    clanTag,
}: PlayerHeroProps) {
    return (
        <HeroBannerWrapper backgroundImage="url(/player-banner.jpg)">
            <div className="flex items-center gap-4 sm:gap-6">
                <p className="text-primary font-extrabold text-4xl text-shadow-lg/30 md:text-6xl">
                    {name}
                </p>
                <div className="w-10 relative text-center md:w-16 sm:w-14">
                    <Image
                        src="/experience-icon.png"
                        alt="Experience icon"
                        width={144}
                        height={149}
                        className="w-full"
                    />
                    <p className="absolute top-1/2 left-1/2 -translate-1/2 text-base-100 font-semibold text-md sm:font-bold sm:text-xl">
                        {level}
                    </p>
                </div>
            </div>
            <p className="text-neutral-content text-lg">{tag}</p>
            {clanTag && (
                <Link
                    href={`/clan/${sanitizeTag(clanTag)}`}
                    className="link link-hover link-primary text-base-100 text-lg"
                >
                    {clanName} <span className="font-bold text-xl">›</span>
                </Link>
            )}
        </HeroBannerWrapper>
    );
}
