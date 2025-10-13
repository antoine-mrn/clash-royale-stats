"use client";

import HeroBannerWrapper from "../shared/HeroBannerWrapper";
import Image from "next/image";
import Badge from "../ui/Badge";
import FavoriteButton from "../ui/FavoriteButton";

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
            backgroundImage={"url(/clan-banner.png)"}
            imageClassName="bg-center"
        >
            <div>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 relative">
                        <Image
                            src={badgeUrl}
                            alt={`${name} badge`}
                            fill
                            sizes="64px"
                            className="object-contain"
                        />
                    </div>
                    <span className="mb-4 text-primary font-extrabold text-4xl text-shadow-lg/30 md:text-6xl">
                        {name}
                    </span>
                    <FavoriteButton
                        className="ml-auto"
                        tag={tag}
                        name={name}
                        store="favoritesClan"
                    />
                </div>
                <span className="text-neutral-content block mb-2">{tag}</span>

                <Badge
                    badgeUrl="/clan.png"
                    alt="Clan illustration"
                    label={clanWarTrophies}
                    badgeColor="success"
                    textSize="text-lg"
                    size={36}
                />
            </div>
        </HeroBannerWrapper>
    );
}
