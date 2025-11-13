"use client";

import { RiverRaceLog, RiverRaceLogItem } from "@/types/riverRace";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import ClanParticipantList from "./ClanParticipantList";
import ClanWarRow from "./ClanWarRow";
import Image from "next/image";
import { useState, useTransition } from "react";
import { loadMoreRiverRaceHistory } from "@/lib/actions/clanWarActions";

interface ClanWarListProps {
    tag: string;
    initialData: RiverRaceLog;
}

export default function ClanWarList({ tag, initialData }: ClanWarListProps) {
    const LIMIT_ITEMS = 3;
    const [items, setItems] = useState<RiverRaceLogItem[]>(initialData.items);
    const [isPending, startTransition] = useTransition();
    const [nextAfter, setNextAfter] = useState<string | undefined>(
        initialData.paging.cursors.after
    );
    const [error, setError] = useState<string>("");

    const handleMoreRiverRace = () => {
        startTransition(async () => {
            try {
                const newData = await loadMoreRiverRaceHistory(
                    tag,
                    LIMIT_ITEMS,
                    nextAfter
                );

                setItems((prev) => [...prev, ...newData.items]);
                setNextAfter(newData.paging?.cursors?.after);
                setError("");
            } catch (err) {
                console.error(err);
                setError("An error was occured");
            }
        });
    };

    return (
        <>
            <section className="max-w-7xl space-y-8 px-2 w-full mx-auto mt-6 md:px-6">
                {items.map((riverRace, index) => (
                    <CardContainer
                        key={index}
                        ariaLabelledBy="river-race-title"
                    >
                        <CardHeaderContainer>
                            <CardTitle titleId="river-race-title">
                                River race {riverRace.seasonId} - week{" "}
                                {riverRace.sectionIndex + 1}
                            </CardTitle>
                            <Image
                                src="/assets/clan.webp"
                                alt="Clan illustration icon"
                                width={80}
                                height={80}
                                className="w-10"
                            />
                        </CardHeaderContainer>
                        <ul className="join join-vertical">
                            {riverRace.standings.map((clan) => (
                                <li
                                    key={clan.tag}
                                    className={`collapse ${
                                        clan.participants
                                            ? "collapse-arrow"
                                            : ""
                                    } join-item border-b border-base-300`}
                                >
                                    {clan.participants && (
                                        <input
                                            type="checkbox"
                                            name="my-accordion-4"
                                        />
                                    )}
                                    <div className="collapse-title font-semibold flex items-center gap-4 p-4 pr-12">
                                        <ClanWarRow clan={clan} />
                                    </div>
                                    <div className="collapse-content text-sm">
                                        <ClanParticipantList
                                            clanParticipant={clan.participants}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContainer>
                ))}
            </section>

            <div className="space-y-2">
                {nextAfter && (
                    <button
                        onClick={handleMoreRiverRace}
                        disabled={isPending}
                        className="btn btn-primary mx-auto flex items-center justify-center gap-2 w-[140px]"
                        aria-label="Load more river race history"
                    >
                        {isPending ? (
                            <>
                                <span className="loading loading-spinner loading-sm" />
                                <span>Loading...</span>
                            </>
                        ) : (
                            <span>Load more</span>
                        )}
                    </button>
                )}
                {error && (
                    <span className="text-sm text-center block font-semibold text-error">
                        {error}
                    </span>
                )}
            </div>
        </>
    );
}
