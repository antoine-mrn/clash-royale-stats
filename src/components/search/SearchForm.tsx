"use client";

import { isValidTag, sanitizeTag } from "@/utils/stringMethods";
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
        const rawTag = (formData.get("tag") as string).trim();
        const tag = sanitizeTag(rawTag);

        if (!tag) {
            setError("Tag is required");
            return;
        }

        if (!isValidTag(tag)) {
            setError("Invalid tag format");
            return;
        }

        router.push(`/${type}/${tag}`);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto px-6"
            aria-label="Search for player or clan"
        >
            <div className="flex gap-2">
                <label htmlFor="type" className="sr-only">
                    Type
                </label>
                <select
                    name="type"
                    className="select select-primary w-auto rounded-lg"
                >
                    <option>Player</option>
                    <option>Clan</option>
                </select>
                <label htmlFor="tag" className="sr-only">
                    Tag
                </label>
                <input
                    type="text"
                    name="tag"
                    placeholder="Your player or clan tag, ex: 8VLPULUYR"
                    className="input input-primary w-full rounded-lg"
                />
                <button
                    type="submit"
                    className="btn btn-soft btn-primary rounded-lg"
                >
                    Search
                </button>
            </div>
            {error && (
                <p
                    role="alert"
                    className="text-center text-error font-bold text-sm mt-1"
                >
                    {error}
                </p>
            )}
        </form>
    );
}
