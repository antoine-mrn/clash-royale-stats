interface HeroBannerWrapperProps {
    children: React.ReactNode;
    backgroundImage: string;
}

export default function HeroBannerWrapper({
    children,
    backgroundImage,
}: HeroBannerWrapperProps) {
    return (
        <div
            className="hero min-h-72"
            style={{
                backgroundImage: `${backgroundImage}`,
            }}
        >
            <div className="hero-overlay bg-neutral-900/85"></div>
            <div className="hero-content justify-between w-full max-w-4xl">
                <div>{children}</div>
            </div>
        </div>
    );
}
