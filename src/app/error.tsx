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
                src="/tears.png"
                alt="Skeleton cries image"
                width={640}
                height={640}
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
