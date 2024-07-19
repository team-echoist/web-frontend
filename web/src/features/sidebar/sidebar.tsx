"use client"
import React, { useState, useEffect } from "react"
import * as Styled from "./sidebar.styled"
import { Modal } from "./modal"
import HamburgerButtonIcon from "@/shared/assets/img/hamburger_button.svg"

interface SidebarProps {
    items: Array<{ label: string; content: React.ReactNode }>
}

export const SideBar = ({ items = [] }: SidebarProps) => {
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
        <>
            <Styled.HamburgerButton onClick={toggleSidebar}>
                <HamburgerButtonIcon />
            </Styled.HamburgerButton>
            <Styled.SidebarContainer open={open}>
                {items.map((item, index) => (
                    <Styled.SidebarItem key={index} onClick={() => handleItemClick(item.content)}>
                        {item.label}
                    </Styled.SidebarItem>
                ))}
            </Styled.SidebarContainer>
            <Modal isOpen={selectedItem !== null} onClose={handleCloseModal}>
                {selectedItem}
            </Modal>
        </>
    )
}

export default SideBar
