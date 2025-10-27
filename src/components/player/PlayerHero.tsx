"use client";

import Image from "next/image";
import HeroBannerWrapper from "../shared/HeroBannerWrapper";
import FavoriteButton from "../ui/FavoriteButton";
import TagLink from "../shared/TagLink";
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
                <span className="text-primary font-extrabold text-4xl text-shadow-lg/30 md:text-6xl">
                    {name}
                </span>
                <div className="w-10 relative text-center md:w-16 sm:w-14">
                    <Image
                        src="/experience-icon.png"
                        alt="Experience icon"
                        width={144}
                        height={149}
                        className="w-full"
                    />
                    <span className="absolute top-1/2 left-1/2 -translate-1/2 text-white font-semibold text-md sm:font-bold sm:text-xl">
                        {level}
                    </span>
                </div>
                <FavoriteButton
                    className="ml-auto"
                    tag={tag}
                    name={name}
                    store="favoritesPlayer"
                />
            </div>
            <span className="text-neutral-content text-lg block">{tag}</span>
            {clanTag && (
                <TagLink
                    type="clan"
                    tag={clanTag}
                    className="link link-hover link-primary text-white text-lg"
                >
                    {clanName} <span className="font-bold text-xl">›</span>
                </TagLink>
            )}
        </HeroBannerWrapper>
    );
}
