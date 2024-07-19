"use client"
import * as Styled from "./modal.styled"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null

    return (
        <Styled.ModalOverlay onClick={onClose}>
            <Styled.ModalContent onClick={(e) => e.stopPropagation()}>
                <Styled.CloseButton onClick={onClose}>X</Styled.CloseButton>
                {children}
            </Styled.ModalContent>
        </Styled.ModalOverlay>
    )
}

export default Modal
