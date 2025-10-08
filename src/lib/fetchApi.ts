import { notFound } from "next/navigation";
import { ApiError } from "./errors/error";

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
    try {
        const response = await fetch(`${process.env.CR_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                Authorization: `Bearer ${process.env.CR_API_KEY}`,
                "Content-Type": "application/json",
                ...options.headers,
            },
        });

        if (response.status === 404) {
            notFound();
        }

        if (!response.ok) {
            console.error({
                path: endpoint,
                status: response.status,
                timestamp: new Date().toISOString(),
            });

            throw new ApiError("Unable to retrieve data");
        }

        return response;
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }

        console.error("Fetch error:", {
            path: endpoint,
            error: error instanceof Error ? error.message : "Unknown error",
            timestamp: new Date().toISOString(),
        });

        throw new ApiError("Unable to retrieve data");
    }
}
