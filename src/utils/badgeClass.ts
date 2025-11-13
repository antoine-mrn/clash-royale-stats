export function getRankingBgClass(rank: number): string {
    switch (rank) {
        case 1:
            return "bg-yellow-400"; // Or
        case 2:
            return "bg-gray-400"; // Argent
        case 3:
            return "bg-orange-400"; // Bronze
        default:
            return "bg-neutral-content/90"; // Neutre
    }
}

export function getRoleBgClass(role: string): string {
    switch (role) {
        case "member":
            return "badge-neutral";
        case "elder":
            return "badge-success";
        case "coLeader":
            return "badge-info";
        case "leader":
            return "badge-secondary";
        default:
            return "badge-neutral";
    }
}
