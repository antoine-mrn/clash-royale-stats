import { fetchApi } from "../fetchApi";

export async function getLastSeasonId() {
    const response = await fetchApi(`/locations/global/seasons`);

    const { items } = await response.json();

    return items.reduce((prev: { id: string }, curr: { id: string }) => {
        return prev.id > curr.id ? prev : curr;
    }).id;
}
