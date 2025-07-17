interface CardHeaderContainerProps {
    children: React.ReactNode;
}

//idem pour le spread des props
export default function CardHeaderContainer({
    children,
}: CardHeaderContainerProps) {
    return <div className="flex items-center gap-2 p-4">{children}</div>;
}
