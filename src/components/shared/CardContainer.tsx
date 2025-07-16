interface CardContainerProps {
    children: React.ReactNode;
}

export default function CardContainer({ children }: CardContainerProps) {
    return (
        <div className="bg-base-100 rounded-box shadow-md flex flex-col">
            {children}
        </div>
    );
}
