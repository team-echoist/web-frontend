"use client"
import { CustomerSupportContent } from "@/features/sidebar/SidebarList/CustomerSupportContent"
import { LinkedOutIndexContent } from "@/features/sidebar/SidebarList/LinkedOutIndexContent"
import { LogoutContent } from "@/features/sidebar/SidebarList/LogoutContent"
import { NotificationSettingContent } from "@/features/sidebar/SidebarList/Notification/NotificationSettingContent"
import { ProfileContent } from "@/features/sidebar/SidebarList/profileContent"
import { ShopContent } from "@/features/sidebar/SidebarList/ShopContent"
import { UpdateHistoryContent } from "@/features/sidebar/SidebarList/UpdateHistoryContent"
import { ScreenSettingContent } from "@/features/sidebar/SidebarList/ScreenSettingContent"
import { RenderView } from "@/pages-flat"

type PageParams = {
    pagename: string
}

function Page({ params }: { params: PageParams }) {
    const sidebarItems = [
        // { label: "주간 링크드아웃 지수", content: <LinkedOutIndexContent /> },
        // { label: "상점", content: <ShopContent /> },
        { label: "화면 설정", content: <ScreenSettingContent /> },
        { label: "알림 설정", content: <NotificationSettingContent /> },
        { label: "고객지원", content: <CustomerSupportContent /> },
        { label: "업데이트 기록", content: <UpdateHistoryContent /> },
        { label: "로그아웃", content: <LogoutContent /> },
    ]

    return (
        <>
            <RenderView pageName={params.pagename} sidebarItems={sidebarItems} />
        </>
    )
}

export default Page
