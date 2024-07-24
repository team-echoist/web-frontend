"use client"
import React, { useState, useEffect, useRef } from "react"
import * as Styled from "./sidebar.styled"
import { Modal } from "./modal"
import HamburgerButtonIcon from "@/shared/assets/img/hamburger_button.svg"
import { LinkedOutIndexContent } from "./SidebarList/LinkedOutIndexContent"
import { ShopContent } from "./SidebarList/ShopContent"
import { ProfileContent } from "./SidebarList/profileContent"

interface SidebarProps {
    items: Array<{ label: string; content: React.ReactNode }>
    children: React.ReactNode
}

export const SideBar = ({ items = [], children }: SidebarProps) => {
    const [open, setOpen] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const [selectedItem, setSelectedItem] = useState<React.ReactNode | null>(null)
    const sidebarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [sidebarRef])

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
            <Styled.SidebarContainer ref={sidebarRef} open={open}>
                <ProfileContent />
                <Styled.Divider />
                <LinkedOutIndexContent />
                <Styled.Divider />
                <ShopContent />
                <Styled.Divider />
                {items.map((item, index) => (
                    <Styled.SidebarItem key={index} onClick={() => handleItemClick(item.content)}>
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
