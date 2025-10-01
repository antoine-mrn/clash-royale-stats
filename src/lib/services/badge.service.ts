import badges from "@/data/clan-badges.json";

export function getBadgeUrl(badgeId: number): string {
    const badge = badges.find((b) => b.id === badgeId);
    if (!badge) {
        return "/assets/badges/default.png";
    }
    return `https://royaleapi.github.io/cr-api-assets/badges/${badge.name}.png`;
}
