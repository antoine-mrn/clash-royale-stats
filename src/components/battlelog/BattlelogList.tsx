"use client";
import { Battle } from "@/types/battle.interface";
import BattleCard from "./BattleCard";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function BattlelogList({
    playerBattlelog,
}: {
    playerBattlelog: Battle[];
}) {
    const [numberMaxOfBattle, setNumberMaxOfBattle] = useState<number>(5);
    const battleToRender = playerBattlelog.slice(0, numberMaxOfBattle);

    const options = {
        root: null,
        rootMargin: "200px",
        threshold: 0.1,
    };

    const { targetRef, isMounted, isIntersecting } =
        useIntersectionObserver<HTMLDivElement>(options);

    useEffect(() => {
        if (isIntersecting) {
            setNumberMaxOfBattle((prev) => prev + 5);
        }
    }, [isIntersecting]);

    if (!isMounted) return null;

    return (
        <section className="max-w-7xl px-6 mx-auto">
            <ul className="w-full p-6 mx-auto grid lg:grid-cols-2 gap-4">
                {battleToRender.map((battle, index) => (
                    <li
                        key={index}
                        className="rounded-box shadow-sm border border-neutral-100 py-4"
                    >
                        <BattleCard battle={battle} />
                    </li>
                ))}
            </ul>
            {numberMaxOfBattle < playerBattlelog.length && (
                <div className="h-10 w-full" ref={targetRef}></div>
            )}
        </section>
    );
}
