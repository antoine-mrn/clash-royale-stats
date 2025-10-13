import { useState, useEffect, useCallback } from "react";

type FavoriteItem = { tag: string; name: string };

const useLocalStorage = (
    key: string
): [FavoriteItem[], (value: FavoriteItem[]) => void, () => void] => {
    const [state, setState] = useState<FavoriteItem[]>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : [];
        } catch {
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
