interface CardContainerProps {
    children: React.ReactNode;
    className?: string;
}

//un petit spread pour les props serait cool aussi 
export default function CardContainer({
    children,
    className,
    //...props
}: CardContainerProps) {
    return (
        <div
       // {...props}
            className={`bg-base-100 rounded-box shadow-md flex flex-col ${className}`}
        >
            {children}
        </div>
    );
}
