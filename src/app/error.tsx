"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Error:", error);
    }, [error]);
    return (
        <div className="h-full flex flex-1 flex-col items-center justify-center gap-4">
            <Image
                src="/assets/tears.webp"
                alt="Crying skeleton illustration symbolizing an error"
                width={512}
                height={512}
                className="w-64"
            />
            <h1 className="text-xl font-bold">{error.message}</h1>
            <div className="space-x-4">
                <button
                    onClick={reset}
                    className="px-6 py-3 btn btn-info rounded-lg"
                >
                    Retry
                </button>
                <Link href="/" className="px-6 py-3 btn btn-success rounded-lg">
                    Bak home
                </Link>
            </div>
        </div>
    );
}
