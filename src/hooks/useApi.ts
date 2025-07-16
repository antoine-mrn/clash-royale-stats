import axios, { AxiosInstance } from "axios";

export function useApi() {
    const api: AxiosInstance = axios.create({
        baseURL: process.env.CR_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    api.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${process.env.CR_API_KEY}`;

        return config;
    });

    return api;
}
