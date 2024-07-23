"use client"
import { useState, useEffect } from "react"
import * as Styled from "./sidebar.styled"
import { Modal } from "./modal"
import HamburgerButtonIcon from "@/shared/assets/img/hamburger_button.svg"
import { useSidebarStore } from "@/shared/store/store"

interface SidebarProps {
    items: Array<{ label: string; content: React.ReactNode }>
}

export const SideBar = ({ items = [] }: SidebarProps) => {
    const [isClient, setIsClient] = useState(false)

    const { open, toggleSidebar, selectedItem, setSelectedItem } = useSidebarStore()

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleItemClick = (content: React.ReactNode) => {
        setSelectedItem(content)
        toggleSidebar()
    }

    const handleCloseModal = () => {
        setSelectedItem(null)
    }

    return (
        <>
            {!open && (
                <Styled.HamburgerButton onClick={toggleSidebar}>
                    <HamburgerButtonIcon />
                </Styled.HamburgerButton>
            )}
            <Styled.SidebarContainer open={open}>
                {items.map((item, index) => (
                    <Styled.SidebarItem key={index} onClick={() => handleItemClick(item.content)}>
                        <div>{item.label}</div>
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
