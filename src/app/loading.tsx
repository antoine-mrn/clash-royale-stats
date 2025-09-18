import Image from "next/image";

export default function Loading() {
    return (
        <div className="h-full flex flex-1 flex-col items-center justify-center gap-4">
            <Image
                src="/waiting-emote.png"
                alt="Waiting goblin illustration"
                width={256}
                height={200}
            />
            <span className="loading loading-spinner loading-lg text-base-content"></span>
            <span className="text-sm text-base-content">Loading...</span>
        </div>
    );
}
