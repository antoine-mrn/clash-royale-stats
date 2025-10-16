import HeroBannerWrapper from "../shared/HeroBannerWrapper";

export default function FavoritesHero() {
    return (
        <HeroBannerWrapper
            backgroundImage="url(/favorites-banner.png)"
            imageClassName="bg-top"
        >
            <h1 className="text-primary font-extrabold text-4xl text-shadow-lg/30 md:text-6xl">
                Favorites
            </h1>
        </HeroBannerWrapper>
    );
}
