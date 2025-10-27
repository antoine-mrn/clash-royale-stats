interface CardContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function CardContainer({
    children,
    className,
}: CardContainerProps) {
    return (
        <div
            className={`bg-base-100 shadow-md flex flex-col rounded-2xl ${className}`}
        >
            {children}
        </div>
    );
}
