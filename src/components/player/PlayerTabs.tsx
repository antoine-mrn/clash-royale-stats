"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PlayerTabs({ tag }: { tag: string }) {
    const pathname = usePathname();

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
    return (
        <div
            role="tablist"
            className="tabs tabs-box rounded-t-none bg-base-300"
        >
            {tabs.map((tab, index) => (
                <Link
                    key={index}
                    href={tab.url}
                    role="tab"
                    className={`tab ${
                        pathname === tab.url ? "tab-active font-semibold" : ""
                    }`}
                >
                    {tab.name}
                </Link>
            ))}
        </div>
    );
}
