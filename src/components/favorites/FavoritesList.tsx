import { FavoriteItem } from "@/types/favorite.interface";
import { Trash2Icon } from "lucide-react";
import TagLink from "../shared/TagLink";

type typeStorage = "player" | "clan";

interface FavoritesListProps {
    type: typeStorage;
    favoritesList: FavoriteItem[];
    onDelete: (type: typeStorage, tag: string) => void;
}

export default function FavoritesList({
    type,
    favoritesList,
    onDelete,
}: FavoritesListProps) {
    return favoritesList.map((item) => (
        <li
            key={item.tag}
            className="list-row flex justify-between items-center hover:bg-primary/10"
        >
            <div>
                <TagLink type={type} tag={item.tag} className="text-primary">
                    {item.name}
                </TagLink>
                <p className="text-sm opacity-70">{item.tag}</p>
            </div>
            <button
                onClick={() => onDelete(type, item.tag)}
                className="btn btn-sm btn-error btn-outline flex items-center gap-1"
            >
                <Trash2Icon className="w-4 h-4" />
                Delete
            </button>
        </li>
    ));
}
