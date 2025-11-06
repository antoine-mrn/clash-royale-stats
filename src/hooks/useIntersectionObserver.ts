import { useEffect, useRef, useState } from "react";

interface options {
    root: Element | null;
    rootMargin: string;
    threshold: number;
}

const basicOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};

export function useIntersectionObserver<T extends HTMLElement>(
    options: options = basicOptions
) {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    const targetRef = useRef<T>(null);

    const callback = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || !targetRef.current) return;

        const observer = new IntersectionObserver(callback, options);
        observer.observe(targetRef.current);

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [isMounted, options]);

    return { targetRef, isMounted, isIntersecting };
}
