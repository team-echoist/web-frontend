import Image from "next/image"
import Header from "./_components/header/Header"
import Policies from "./policy/page"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Header />
        </main>
    )
}
