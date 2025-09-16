import { getRankingBgClass } from "@/utils/rankingBgClass";

export default function RankMask({ rank }: { rank: number }) {
    return (
        <p
            className={`mask mask-squircle text-2xl font-bold p-2 ${getRankingBgClass(
                rank
            )}`}
        >
            {rank}
        </p>
    );
}
