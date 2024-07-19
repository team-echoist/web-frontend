"use client"
import { RenderView } from "@/pages-flat"

type PageParams = {
    pagename: string
}

function Page({ params }: { params: PageParams }) {
    const sidebarItems = [
        { label: "프로필", content: <div>프로필 설정</div> },
        { label: "링크드아웃 지수", content: <div>링크드아웃 지수 설명</div> },
        { label: "상점", content: <div>상점 설명</div> },
        { label: "취약 설정", content: <div>취약 설정 설명</div> },
        { label: "알림 설정", content: <div>알림 설정 설명</div> },
        { label: "고객지원", content: <div>고객지원 설명</div> },
        { label: "업데이트 기록", content: <div>업데이트 기록 설명</div> },
        { label: "로그아웃", content: <div>로그아웃 설명</div> },
    ]

    return (
        <>
            <RenderView pageName={params.pagename} sidebarItems={sidebarItems} />
        </>
    )
}

export default Page
