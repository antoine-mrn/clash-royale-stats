export default function SegmentLoader() {
    return (
        <div className="flex justify-center w-full mt-16 min-h-screen">
            <div className="relative w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-primary animate-ping"></div>
                <div className="relative w-full h-full bg-primary rounded-full animate-bounce"></div>
            </div>
        </div>
    );
}
