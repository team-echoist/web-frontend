"use client"
import React, { useState, useEffect } from "react"
import * as Styled from "./sidebar.styled"
import { Modal } from "./modal"
import HamburgerButtonIcon from "@/shared/assets/img/hamburger_button.svg"
import { useSidebarStore } from "@/store/sidebar"

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
        toggleSidebar()
    }

    const handleCloseModal = () => {
        setSelectedItem(null)
    }

    return (
        <Styled.LayoutContainer>
            <Styled.HamburgerButton onClick={toggleSidebar} isOpen={open}>
                <HamburgerButtonIcon />
            </Styled.HamburgerButton>
            <Styled.SidebarContainer open={open}>
                {items.map((item, index) => (
                    <Styled.SidebarItem key={index} onClick={() => handleItemClick(item.content)}>
                        <div>{item.label}</div>
                    </Styled.SidebarItem>
                ))}
            </Styled.SidebarContainer>
            <Styled.MainContent>{isClient && !open && children}</Styled.MainContent>
            <Modal isOpen={selectedItem !== null} onClose={handleCloseModal}>
                {selectedItem}
            </Modal>
        </Styled.LayoutContainer>
    )
}

export default SideBar
