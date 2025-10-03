"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabsProps {
    tabs: { name: string; url: string }[];
}

export default function Tabs({ tabs }: TabsProps) {
    const pathname = usePathname();

    return (
        <div className="bg-neutral-900/10 backdrop-blur-sm border-t border-primary/40">
            <div
                role="tablist"
                className="tabs tabs-lg tabs-box rounded-t-none max-w-4xl mx-auto bg-primary/0"
            >
                {tabs.map((tab, index) => (
                    <Link
                        key={index}
                        href={tab.url}
                        role="tab"
                        className={`tab ${
                            pathname === tab.url
                                ? "tab-active text-primary font-semibold hover:text-primary/80"
                                : "text-base-content hover:text-primary/80"
                        }`}
                    >
                        {tab.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
