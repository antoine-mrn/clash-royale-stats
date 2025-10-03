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
    ];
    return <Tabs tabs={tabs} />;
}
