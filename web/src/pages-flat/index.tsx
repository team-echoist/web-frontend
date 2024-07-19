"use client"
import { FindInfo } from "./findinfo"
import { Login } from "./login"
import { Mypage } from "./mypage"
import { Register } from "./register"
import { WriteEssay } from "./write_essay"
import { NotFound } from "./notfound"
import { SideBar } from "@/features/sidebar/sidebar"

type RenderViewProps = {
    pageName: string
    sidebarItems: Array<{ label: string; content: React.ReactNode }>
}

export const RenderView = ({ pageName, sidebarItems }: RenderViewProps) => {
    if (!pageName) {
        return <div>Loading...</div>
    }
    let Component
    switch (pageName) {
        case "findinfo":
            Component = FindInfo
            break
        case "login":
            Component = Login
            break
        case "mypage":
            Component = Mypage
            break
        case "register":
            Component = Register
            break
        case "write_essay":
            Component = WriteEssay
            break
        default:
            Component = NotFound
    }
    return (
        <>
            <SideBar items={sidebarItems} />
            <Component />
        </>
    )
}

export default RenderView
