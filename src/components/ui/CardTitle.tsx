interface CardTitleProps {
    className?: string;
    children: React.ReactNode;
}

export default function CardTitle({ className, children }: CardTitleProps) {
    return (
        <h2 className="p-4 pb-2 text-xl font-semibold opacity-60 tracking-wide">
            {children}
        </h2>
    );
}
