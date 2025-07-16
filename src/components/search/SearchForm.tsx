"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchForm() {
    const [error, setError] = useState<string>("");
    const router = useRouter();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");

        const formData = new FormData(e.currentTarget);
        const type = (formData.get("type") as string).toLowerCase();
        const tag = (formData.get("tag") as string).trim().toUpperCase();

        if (!tag) {
            setError("Tag is required");
            return;
        }

        if (tag.length < 8 || !/^[A-Z0-9]+$/.test(tag)) {
            setError("Invalid tag format");
            return;
        }

        router.push(`/${type}/${tag}`);
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-6">
            <div className="flex gap-2">
                <select name="type" className="select select-primary w-auto">
                    <option>Player</option>
                    <option>Clan</option>
                </select>
                <input
                    type="text"
                    name="tag"
                    placeholder="Your player or clan tag, ex: 8VLPULUYR"
                    className="input input-primary w-full"
                />
                <button type="submit" className="btn btn-soft btn-primary">
                    Search
                </button>
            </div>
            {error && (
                <p className="text-center text-error font-bold text-sm mt-1">
                    {error}
                </p>
            )}
        </form>
    );
}
