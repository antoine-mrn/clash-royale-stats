import Image from "next/image";

interface BadgeProps {
    badgeUrl: string;
    label: string | number;
    badgeColor?: string;
    size?: string;
    alt?: string;
    className?: string;
}

// export default function Badge({
//     badgeUrl,
//     label,
//     badgeColor = "neutral-content",
//     size = "w-12 h-12",
//     alt = "Badge illustration",
//     className,
// }: BadgeProps) {
//     return (
//         <div className="h-8 md:h-10">
//             <div
//                 className={`badge badge-${badgeColor} relative w-full h-full ${className}`}
//             >
//                 <div className={`absolute w-8 h-8 -left-2 md:w-12 `}>
//                     <Image
//                         src={badgeUrl}
//                         alt={alt}
//                         fill
//                         className="object-contain"
//                     />
//                 </div>
//
//                 <p className="pl-4 pr-1 font-semibold text-lg md:pl-8">
//                     {label}
//                 </p>
//             </div>
//         </div>
//     );
// }

export default function Badge({
    label,
    badgeUrl,
    badgeColor = "primary",
    size = "w-6 h-6",
}: BadgeProps) {
    return (
        <div
            className={`flex items-center badge badge-${badgeColor} gap-2 px-3 py-1`}
        >
            <Image
                src={badgeUrl}
                alt="icon"
                width={20}
                height={20}
                className="object-contain"
            />

            <span className="font-semibold text-sm">{label}</span>
        </div>
    );
}
