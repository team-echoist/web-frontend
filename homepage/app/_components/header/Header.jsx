import Link from "next/link"

const Header = () => {
    return (
        <nav>
            <Link href="/about">About</Link>
            <Link href="/learn">Learn</Link>
            <Link href="/premium">Premium</Link>
            <Link href="/newsletter">NewsLetter</Link>
            <Link href="/policy">Policy</Link>
        </nav>
    )
}

export default Header
