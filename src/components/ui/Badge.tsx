import Image from "next/image";

interface BadgeProps {
    badgeUrl: string;
    label: string | number;
    badgeColor?: string;
    size?: string;
    alt?: string;
    className?: string;
}

export default function Badge({
    badgeUrl,
    label,
    badgeColor = "neutral-content",
    size = "w-12 h-12",
    alt = "Badge illustration",
    className,
}: BadgeProps) {
    return (
        <div className={`badge badge-${badgeColor} relative mt-4 ${className}`}>
            <div className={`${size} absolute -left-2`}>
                <Image
                    src={badgeUrl}
                    alt={alt}
                    fill
                    className="object-contain"
                />
            </div>

            <p className="pl-8 pr-1 font-semibold text-lg">{label}</p>
        </div>
    );
}
