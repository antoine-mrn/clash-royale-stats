import Image from "next/image";
import Link from "next/link";
interface PlayerHeroProps {
    name: string;
    level: number;
    tag: string;
    clanName: string;
}

export default function PlayerHero({
    name,
    level,
    tag,
    clanName,
}: PlayerHeroProps) {
    return (
        <div
            className="hero min-h-72"
            style={{
                backgroundImage: "url(../player-banner.jpg)",
            }}
        >
            <div className="hero-overlay bg-neutral-900/85"></div>
            <div className="hero-content justify-between w-full max-w-4xl">
                <div>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <p className="text-primary font-extrabold text-4xl text-shadow-lg/30 sm:text-6xl">
                            {name}
                        </p>
                        <div className="w-10 relative text-center sm:w-16">
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
                    {clanName && (
                        <Link
                            href={"#"}
                            className="link link-hover link-primary text-base-100 text-lg"
                        >
                            {clanName}{" "}
                            <span className="font-bold text-xl">›</span>
                        </Link>
                    )}
                </div>
                {/* <Image src={player.currentFavouriteCard.iconUrls.medium} alt={`${player.currentFavouriteCard.name} image`} width={420} height={285} className="w-24" /> */}
            </div>
        </div>
    );
}
