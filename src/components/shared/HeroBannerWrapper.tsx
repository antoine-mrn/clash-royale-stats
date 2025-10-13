interface HeroBannerWrapperProps {
    children: React.ReactNode;
    backgroundImage: string;
    imageClassName?: string;
}

export default function HeroBannerWrapper({
    children,
    backgroundImage,
    imageClassName,
}: HeroBannerWrapperProps) {
    return (
        <div
            className={`hero min-h-72 ${imageClassName}`}
            style={{
                backgroundImage: `${backgroundImage}`,
            }}
        >
            <div className="hero-overlay bg-neutral-900/85"></div>
            <div className="hero-content justify-between w-full max-w-4xl">
                <div className="w-full">{children}</div>
            </div>
        </div>
    );
}
