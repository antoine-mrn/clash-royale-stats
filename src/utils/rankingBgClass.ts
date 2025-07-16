export function getRankingBgClass(rank: number): string {
    switch (rank) {
        case 1:
            return "bg-yellow-400"; // Or
        case 2:
            return "bg-gray-300"; // Argent
        case 3:
            return "bg-orange-400"; // Bronze
        default:
            return "bg-base-200"; // Neutre
    }
}
