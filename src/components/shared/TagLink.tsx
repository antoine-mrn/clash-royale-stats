import { sanitizeTag } from "@/utils/stringMethods";
import Link from "next/link";

interface TagLinkProps {
    type: "player" | "clan";
    name: string;
    tag: string;
    className?: string;
}

export default function TagLink({ type, name, tag, className }: TagLinkProps) {
    return (
        <Link
            href={`${type}/${sanitizeTag(tag)}`}
            className={`font-bold link link-hover hover:link-primary ${className}`}
        >
            {name}
        </Link>
    );
}
