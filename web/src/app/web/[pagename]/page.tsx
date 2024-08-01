"use client"
import { RenderView } from "@/pages-flat"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { getUserInfo } from "@/shared/api"
import { parseJwt } from "@/shared/lib/jwt"
import { useStore } from "@/shared/store"
import { useRouter } from "next/navigation"
import { SideBar } from "@/features/sidebar"
import { ScreenSettingContent } from "@/features/sidebar/ui/screenSettingContent"
import { ProfileContent } from "@/features/sidebar/ui/profileContent"
import { ShopContent } from "@/features/sidebar/ui/shopContent"
import { NotificationSettingContent } from "@/features/modal/ui/notificationSettingContent"
import { CustomerSupportContent } from "@/features/modal/ui/customerSupportContent"

type PageParams = {
    pagename: string
}

function Index({ params }: { params: PageParams }) {
    const setUser = useStore((state) => state.setUser)
    const [token, setToken] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        const storedToken = sessionStorage.getItem("token") || Cookies.get("token")
        if (storedToken) {
            setToken(storedToken)
        }
    }, [router])

    useEffect(() => {
        const handleUserAuthentication = async () => {
            if (token) {
                const userInfo = parseJwt(token)
                const userData = await getUserInfo(userInfo?.id)
                if (userData) {
                    setUser(userData)
                }
            }
        }
        handleUserAuthentication()
    }, [setUser, token, router])

    const items = [
        { label: "화면 설정", content: <ScreenSettingContent onClose={() => {}} /> },
        { label: "알림 설정", content: <NotificationSettingContent onClose={() => {}} /> },
        { label: "고객 지원", content: <CustomerSupportContent onClose={() => {}} /> },
    ]

    return (
        <>
            <SideBar items={items}>
                <RenderView pageName={params.pagename} />
            </SideBar>
        </>
    )
}

export default Index
