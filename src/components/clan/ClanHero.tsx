import HeroBannerWrapper from "../shared/HeroBannerWrapper";

interface ClanHeroProps {
    name: string;
    tag: string;
}

export default function ClanHero({ name, tag }: ClanHeroProps) {
    return (
        <HeroBannerWrapper
            backgroundImage={"url(../clan-banner.png)"}
            imageClassName="bg-center"
        >
            <div className="space-y-4 sm:space-y-6">
                <p className="text-primary font-extrabold text-4xl text-shadow-lg/30 md:text-6xl">
                    {name}
                </p>
                <p>{tag}</p>
            </div>
        </HeroBannerWrapper>
    );
}
