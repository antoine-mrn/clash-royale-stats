import Image from "next/image";

export default function Loading() {
    return (
        <div className="bg-base-100 h-full flex flex-1 flex-col items-center gap-4">
            <Image
                src="/waiting-emote.png"
                alt="Waiting goblin illustration"
                width={256}
                height={200}
                className="mt-[25%]"
            />
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <span className="text-sm text-neutral-content">Loading...</span>
        </div>
    );
}
