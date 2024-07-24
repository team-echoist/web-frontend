import React, { useState } from "react"
import styled from "styled-components"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

interface TimeSelectorModalProps {
    isOpen: boolean
    onClose: () => void
    initialTime: string
}

const TimeSelectorModal = ({ isOpen, onClose, initialTime }: TimeSelectorModalProps) => {
    const [selectedTime, setSelectedTime] = useState(initialTime)

    if (!isOpen) return null

    const handleSave = () => {
        console.log(`저장된 시간: ${selectedTime}`)
        onClose()
    }

    return (
        <Overlay>
            <ModalContent>
                <h3>알림 허용 시간 설정</h3>
                <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
                <button onClick={handleSave}>저장</button>
                <button onClick={onClose}>닫기</button>
            </ModalContent>
        </Overlay>
    )
}

export default TimeSelectorModal
