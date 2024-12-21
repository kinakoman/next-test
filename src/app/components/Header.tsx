import Image from "next/image"
import Link from "next/link"
export default function Header() {
    return (
        <>
            <header className="w-full h-20 flex justify-center">
                <div className="w-[400px] h-full relative">
                    <Link href="/">
                        <Image src="/logo.png" alt="きなこの部屋のロゴ" fill className="object-cover object-top" />
                    </Link>
                </div>
            </header>
        </>
    )
}