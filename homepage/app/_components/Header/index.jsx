"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Header = () => {
    const router = useRouter()
    const [activePath, setActivePath] = useState("")

    useEffect(() => {
        setActivePath(router.pathname)
    }, [router.pathname])

    const linkClasses = (path) => `mx-[51px] p-2 ${activePath === path ? "text-[#919191]" : "text-white"}`

    return (
        <nav className="flex text-white justify-between items-center text-[20px] ">
            <Link href="/">
                <Image src="/images/logo.svg" alt="로고" width={154} height={63.179} />
            </Link>
            <div>
                <Link href="/about" className="mx-[51px] p-2 font-normal">
                    About
                </Link>
                <Link href="/learn" className="mx-[51px] p-2 font-normal">
                    Learn
                </Link>
                <Link href="/premium" className="mx-[51px] p-2 font-normal">
                    Premium
                </Link>
                <Link href="/newsletter" className="mx-[51px] p-2 font-normal">
                    NewsLetter
                </Link>
            </div>
            <p className="w-[143px] h-[46px] rounded-2xl bg-white text-[#121212] flex justify-center items-center">
                Get the App
            </p>
        </nav>
    )
}

export default Header
