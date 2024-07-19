// src/shared/ui/sidebar/sidebar.tsx
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import * as Styled from "./sidebar.styled"
import HamburgerButton from "@/shared/assets/img/hamburger_button.svg"

export const SideBar = () => {
    const [open, setOpen] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setIsClient(true)
    }, [])

    const toggleSidebar = () => {
        setOpen(!open)
    }

    const navigateTo = (path: string) => {
        if (isClient) {
            router.push(path)
            toggleSidebar()
        }
    }

    return (
        <>
            <Styled.HamburgerButton onClick={toggleSidebar}>
                <HamburgerButton />
            </Styled.HamburgerButton>
            <Styled.SidebarContainer open={open}>
                <Styled.SidebarItem>프로필</Styled.SidebarItem>
                <Styled.SidebarItem>링크드아웃 지수</Styled.SidebarItem>
                <Styled.SidebarItem>상점</Styled.SidebarItem>
                <Styled.SidebarItem>취약 설정</Styled.SidebarItem>
                <Styled.SidebarItem>알림 설정</Styled.SidebarItem>
                <Styled.SidebarItem>고객지원</Styled.SidebarItem>
                <Styled.SidebarItem>업데이트 기록</Styled.SidebarItem>
                <Styled.SidebarItem>
                    <Styled.SidebarButton onClick={() => navigateTo("/logout")}>로그아웃</Styled.SidebarButton>
                </Styled.SidebarItem>
            </Styled.SidebarContainer>
        </>
    )
}

export default SideBar
