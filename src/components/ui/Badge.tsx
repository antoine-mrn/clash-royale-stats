import Image from "next/image";

interface BadgeProps {
    badgeUrl: string;
    label: string | number;
    alt: string;
    badgeColor?: string;
    size?: number;
    textSize?: string;
}

export default function Badge({
    label,
    badgeUrl,
    badgeColor = "primary",
    size = 30,
    textSize = "text-sm",
    alt,
}: BadgeProps) {
    return (
        <div
            className={`flex items-center badge badge-${badgeColor} gap-2 px-3 py-4 rounded-3xl`}
        >
            <Image
                src={badgeUrl}
                alt={alt}
                width={size}
                height={size}
                className="object-contain"
            />

            <span className={`font-semibold ${textSize}`}>{label}</span>
        </div>
    );
}
