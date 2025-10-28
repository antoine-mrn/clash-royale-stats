"use client";

import useIsMounted from "@/hooks/useIsMounted";
import useLocalStorage from "@/hooks/useLocalStorage";
import { HeartMinus, HeartPlus } from "lucide-react";
import { toast } from "sonner";

interface FavoriteButtonInterface {
    tag: string;
    name: string;
    store: string;
    className?: string;
}

export default function FavoriteButton({
    tag,
    name,
    store,
    className,
}: FavoriteButtonInterface) {
    const isMounted = useIsMounted();
    const [items, setValue] = useLocalStorage(store);
    const isFavorite = items.some((item) => item.tag === tag);

    function handleClick() {
        try {
            if (isFavorite) setValue(items.filter((item) => item.tag !== tag));
            else setValue([...items, { tag, name }]);

            toast.success(
                isFavorite
                    ? "Account removed from favorites"
                    : "Account add to favorites"
            );
        } catch {
            toast.error("Error !");
        }
    }

    if (!isMounted) return null;

    return (
        <div
            className={`tooltip ${className}`}
            data-tip={isFavorite ? "Remove to favorites" : "Add to favorites"}
        >
            <button
                onClick={handleClick}
                className={`btn btn-circle transition-colors duration-200 ${
                    isFavorite
                        ? "bg-warning text-warning-content hover:bg-warning-focus"
                        : "btn-ghost text-base-100 bg-error/30 hover:bg-error/80"
                }`}
                aria-label={
                    isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"
                }
            >
                {isFavorite ? (
                    <HeartMinus className="w-5 h-5" />
                ) : (
                    <HeartPlus className="w-5 h-5 text-white" />
                )}
            </button>
        </div>
    );
}
