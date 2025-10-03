import Tabs from "../ui/Tabs";

export default function PlayerTabs({ tag }: { tag: string }) {
    const tabs = [
        {
            name: "Profil",
            url: `/player/${tag}`,
        },
        {
            name: "Battlelog",
            url: `/player/${tag}/battlelog`,
        },
        {
            name: "Decks",
            url: `/player/${tag}/decks`,
        },
    ];
    return <Tabs tabs={tabs} />;
}
