import Image from "next/image";

export default function NotFoundPage() {
    return (
        <div className="h-full flex flex-1 flex-col items-center justify-center gap-4">
            <Image
                src="/assets/why.webp"
                alt="Bowler confused illustration"
                width={640}
                height={640}
                className="w-64"
            />
            <h1 className="text-xl font-bold">404 - Not found</h1>
        </div>
    );
}
