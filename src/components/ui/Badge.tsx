import Image from "next/image";

interface BadgeProps {
    badgeUrl: string;
    label: string | number;
    badgeColor?: string;
    size?: number;
    textSize?: string;
    alt?: string;
}

export default function Badge({
    label,
    badgeUrl,
    badgeColor = "primary",
    size = 22,
    textSize = "text-sm",
}: BadgeProps) {
    return (
        <div
            className={`flex items-center badge badge-${badgeColor} gap-2 px-3 py-4`}
        >
            <Image
                src={badgeUrl}
                alt="icon"
                width={size}
                height={size}
                className="object-contain"
            />

            <span className={`font-semibold ${textSize}`}>{label}</span>
        </div>
    );
}
