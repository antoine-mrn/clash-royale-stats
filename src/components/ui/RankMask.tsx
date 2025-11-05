import { getRankingBgClass } from "@/utils/badgeClass";

interface RankMasKProps {
    rank: number;
    className?: string;
}

export default function RankMask({ rank, className }: RankMasKProps) {
    return (
        <span
            className={`mask mask-squircle text-base-content font-clash-royale text-xl font-bold p-4 flex justify-center items-center ${getRankingBgClass(
                rank
            )} ${className}`}
        >
            {rank}
        </span>
    );
}
