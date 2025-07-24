"use client";
import { Battle } from "@/types/battle.interface";
import BattleCard from "./BattleCard";
import { useCallback, useEffect, useRef, useState } from "react";

export default function BattlelogList({
    playerBattlelog,
}: {
    playerBattlelog: Battle[];
}) {
    const [numberMaxOfBattle, setNumberMaxOfBattle] = useState<number>(5);
    const battleToRender = playerBattlelog.slice(0, numberMaxOfBattle);
    console.log("🚀 ~ battleToRender:", battleToRender.length);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement>(null);

    function addBattle(entries: IntersectionObserverEntry[]) {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setNumberMaxOfBattle((prev) => prev + 5);
        }
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const observer = new IntersectionObserver(addBattle, options);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [containerRef.current, isMounted]);

    if (!isMounted) return null;

    return (
        <section className="max-w-6xl px-6 mx-auto">
            <ul className="max-w-6xl p-6 mx-auto space-y-4">
                {battleToRender.map((battle, index) => (
                    <li
                        key={index}
                        className="rounded-box shadow-sm border border-neutral-100 py-4"
                    >
                        <BattleCard battle={battle} />
                    </li>
                ))}
            </ul>
            <div ref={containerRef}></div>
        </section>
    );
}
