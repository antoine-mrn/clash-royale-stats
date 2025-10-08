"use client";

import { useEffect } from "react";

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
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-md">
                <h2 className="text-2xl font-semibold mb-4">
                    Une erreur est survenue
                </h2>
                <p className="text-gray-600 mb-8">{error.message}</p>
                <div className="space-x-4">
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Réessayer
                    </button>
                    <a
                        href="/"
                        className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 inline-block"
                    >
                        Retour à l'accueil
                    </a>
                </div>
            </div>
        </div>
    );
}
