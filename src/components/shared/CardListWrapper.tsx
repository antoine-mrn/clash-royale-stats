interface CardListWrapperProps {
    title: string;
    children: React.ReactNode;
}
//idem pour le spread des props
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
