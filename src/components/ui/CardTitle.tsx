interface CardTitleProps {
    className?: string;
    children: React.ReactNode;
}

//idem pour le spread des props
export default function CardTitle({ className, children }: CardTitleProps) {
    return (
        <h2 className="text-xl font-semibold opacity-60 tracking-wide">
            {children}
        </h2>
    );
}
