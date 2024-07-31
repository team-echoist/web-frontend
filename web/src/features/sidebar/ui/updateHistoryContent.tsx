"use client"
import styled from "styled-components"
import { ModalHeader } from "../../modal/ui/modalHeader"

const UpdateHistoryContentP = styled.p`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

interface UpdateHistoryContentProps {
    onClose: () => void
}

export const UpdateHistoryContent = ({ onClose }: UpdateHistoryContentProps) => {
    return (
        <div>
            <ModalHeader title="업데이트기록" onClose={onClose} />
            <UpdateHistoryContentP>업데이트 기록이 없습니다.</UpdateHistoryContentP>
        </div>
    )
}
