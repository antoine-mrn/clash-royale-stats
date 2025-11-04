import Image from "next/image";

export default function Loading() {
    return (
        <div className="h-full flex flex-1 flex-col items-center justify-center gap-4">
            <Image
                src="/assets/waiting-emote.webp"
                alt="Goblin emote waiting illustration"
                width={512}
                height={400}
                className="w-3xs"
            />
            <span className="loading loading-spinner loading-lg text-base-content"></span>
            <span className="text-sm text-base-content">Loading...</span>
        </div>
    );
}
