"use client"
import React, { useState, useEffect } from "react"
import * as Styled from "./sidebar.styled"
import { Modal } from "../modal/modal"
import HamburgerButtonIcon from "@/shared/assets/img/hamburger_button.svg"
import { LinkedOutIndexContent } from "./ui/linkedOutIndexContent"
import { ShopContent } from "./ui/shopContent"
import { ProfileContent } from "./ui/profileContent"
import { CustomerSupportContent } from "../modal/ui/customerSupportContent"
import { useTheme } from "@/shared/lib/theme/useTheme"
import { DefaultTheme } from "styled-components"

interface SidebarProps {
    items: Array<{ label: string; content: React.ReactNode }>
    children: React.ReactNode
}

export const SideBar = ({ items = [], children }: SidebarProps) => {
    const [open, setOpen] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const [selectedItem, setSelectedItem] = useState<React.ReactNode | null>(null)
    const { theme } = useTheme()

    useEffect(() => {
        setIsClient(true)
    }, [])

    const toggleSidebar = () => {
        setOpen(!open)
    }

    const handleItemClick = (content: React.ReactNode) => {
        setSelectedItem(content)
    }

    const handleCloseModal = () => {
        setSelectedItem(null)
    }

    if (!isClient) {
        return null
    }

    const themeObject: DefaultTheme = {
        isDarkMode: theme === "dark",
    }

    return (
        <Styled.LayoutContainer theme={themeObject}>
            <Styled.HamburgerButton onClick={toggleSidebar} isOpen={open}>
                <img src={HamburgerButtonIcon} alt="Menu" />
            </Styled.HamburgerButton>
            <Styled.SidebarContainer open={open}>
                <ProfileContent />
                <Styled.Divider />
                <LinkedOutIndexContent />
                <Styled.Divider />
                <ShopContent />
                <Styled.Divider />
                {items.map((item, index) => (
                    <Styled.SidebarItem
                        key={index}
                        onClick={() => handleItemClick(item.content)}
                        active={selectedItem === item.content}
                    >
                        <div>{item.label}</div>
                    </Styled.SidebarItem>
                ))}
            </Styled.SidebarContainer>
            <Styled.MainContent theme={themeObject}>
                {children}
                {selectedItem && (
                    <Styled.ModalContainer>
                        <Modal isOpen={selectedItem !== null} onClose={handleCloseModal}>
                            {selectedItem}
                        </Modal>
                    </Styled.ModalContainer>
                )}
            </Styled.MainContent>
        </Styled.LayoutContainer>
    )
}

export default SideBar
