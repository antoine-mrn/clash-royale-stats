interface CardListWrapperProps {
    title: string;
    children: React.ReactNode;
}

export default function CardListWrapper({
    title,
    children,
}: CardListWrapperProps) {
    return (
        <ul className="list">
            <li className="p-4 pb-2 text-xl font-semibold opacity-60 tracking-wide">
                {title}
            </li>

            {children}
        </ul>
    );
}
