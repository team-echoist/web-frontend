"use client"
import React, { useState, useEffect } from "react"
import * as Styled from "./sidebar.styled"
import { Modal } from "./modal"
import HamburgerButtonIcon from "@/shared/assets/img/hamburger_button.svg"
import { LinkedOutIndexContent } from "./ui/linkedOutIndexContent"
import { ShopContent } from "./ui/shopContent"
import { ProfileContent } from "./ui/profileContent"
import { CustomerSupportContent } from "../modal/customerSupportContent"

interface SidebarProps {
    items: Array<{ label: string; content: React.ReactNode }>
    children: React.ReactNode
}

export const SideBar = ({ items = [], children }: SidebarProps) => {
    const [open, setOpen] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const [selectedItem, setSelectedItem] = useState<React.ReactNode | null>(null)

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

    return (
        <Styled.LayoutContainer>
            <Styled.HamburgerButton onClick={toggleSidebar} isOpen={open}>
                <HamburgerButtonIcon />
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
            <Styled.MainContent>{children}</Styled.MainContent>
            <Modal isOpen={selectedItem !== null} onClose={handleCloseModal}>
                {selectedItem}
            </Modal>
        </Styled.LayoutContainer>
    )
}

export default SideBar
