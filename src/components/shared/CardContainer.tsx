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
            className={`bg-base-100 rounded-box shadow-md flex flex-col ${className}`}
        >
            {children}
        </div>
    );
}
