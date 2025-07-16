interface PlayerHeroProps {
    name: string;
    tag: string;
    clanName: string;
}

export default function PlayerHero({ name, tag, clanName }: PlayerHeroProps) {
    return (
        <div
            className="hero min-h-72"
            style={{
                backgroundImage: "url(../player-banner.jpg)",
            }}
        >
            <div className="hero-overlay bg-neutral-900/85"></div>
            <div className="hero-content justify-between w-full max-w-4xl">
                <div className="">
                    <p className="text-primary font-extrabold text-6xl text-shadow-lg/30">
                        {name}
                    </p>
                    <p className="text-neutral-content text-lg">{tag}</p>
                    <p className="text-base-100 text-lg">{clanName}</p>
                </div>
                {/* <Image src={player.currentFavouriteCard.iconUrls.medium} alt={`${player.currentFavouriteCard.name} image`} width={420} height={285} className="w-24" /> */}
            </div>
        </div>
    );
}
