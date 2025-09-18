import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-primary p-1">
            <div className="max-w-8xl mx-auto">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo Clash Royale dashboard"
                        width={72}
                        height={72}
                    />
                </Link>
            </div>
        </header>
    );
}
