interface CardContainerProps {
    children: React.ReactNode;
    className?: string;
    ariaLabelledBy?: string;
}

export default function CardContainer({
    children,
    className,
    ariaLabelledBy,
}: CardContainerProps) {
    return (
        <section
            className={`bg-base-100 shadow-md flex flex-col rounded-2xl ${className}`}
            aria-labelledby={ariaLabelledBy}
        >
            {children}
        </section>
    );
}
