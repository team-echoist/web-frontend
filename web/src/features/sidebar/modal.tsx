"use client"
import React from "react"
import * as Styled from "./modal.styled"
import { useThemeStore } from "@/shared/store/store" // zustand 스토어 가져오기

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    const { isDarkMode } = useThemeStore() // 다크 모드 상태 가져오기

    if (!isOpen) return null

    return (
        <Styled.ModalOverlay style={{ background: isDarkMode ? "#333" : "#fff" }}>
            <Styled.ModalContent>
                <Styled.CloseButton onClick={onClose}>X</Styled.CloseButton>
                {children}
            </Styled.ModalContent>
        </Styled.ModalOverlay>
    )
}

export default Modal
