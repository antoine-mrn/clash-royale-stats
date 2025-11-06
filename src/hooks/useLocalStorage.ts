import { FavoriteItem } from "@/types/favorite";
import { useState, useEffect, useCallback } from "react";

const useLocalStorage = (
    key: string
): [FavoriteItem[], (value: FavoriteItem[]) => void, () => void] => {
    const [state, setState] = useState<FavoriteItem[]>(() => {
        if (typeof window === "undefined") return [];
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : [];
        } catch (error) {
            console.error("Error reading localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }, [key, state]);

    const setValue = useCallback((value: FavoriteItem[]) => {
        setState(value);
    }, []);

    const remove = useCallback(() => {
        try {
            localStorage.removeItem(key);
            setState([]);
        } catch (error) {
            console.error("Error removing from localStorage:", error);
        }
    }, [key]);

    return [state, setValue, remove];
};

export default useLocalStorage;
