import Tabs from "../ui/Tabs";

export default function ClanTabs({ tag }: { tag: string }) {
    const tabs = [
        {
            name: "Clan",
            url: `/clan/${tag}`,
        },
        {
            name: "War",
            url: `/clan/${tag}/war`,
        },
        {
            name: "History",
            url: `/clan/${tag}/history`,
        },
    ];
    return <Tabs tabs={tabs} />;
}
