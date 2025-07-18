export async function fetchApi(endpoint: string, options: RequestInit = {}) {
    return fetch(`${process.env.CR_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${process.env.CR_API_KEY}`,
            "Content-Type": "application/json",
            ...options.headers,
        },
    });
}
