interface CardTitleProps {
    className?: string;
    children: React.ReactNode;
    titleId?: string;
}

export default function CardTitle({
    className,
    children,
    titleId,
}: CardTitleProps) {
    return (
        <h2
            id={titleId}
            className={`text-xl font-semibold opacity-60 tracking-wide ${className}`}
        >
            {children}
        </h2>
    );
}
