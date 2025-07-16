interface CardTitleProps {
    className?: string;
    children: React.ReactNode;
}

export default function CardTitle({ className, children }: CardTitleProps) {
    return (
        <h2 className="text-xl font-semibold opacity-60 tracking-wide">
            {children}
        </h2>
    );
}
