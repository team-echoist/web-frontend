import React, { useState } from "react"
import styled from "styled-components"
import CloseButtonIcon from "@/shared/assets/img/closebutton.svg"
import DropDown from "@/shared/assets/img/dropdown.svg"

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
    border-radius: 10px;
    background: #212121;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    & h3 {
        text-align: center;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }
`

const TimeSelectorSaveButton = styled.button`
    width: 260px;
    height: 50px;
    border-radius: 10px;
    background: #616fed;
    font-size: 16px;
    font-weight: bold;
    border: none;
    margin-top: 10px;
    cursor: pointer;
`

const CloseButton = styled(CloseButtonIcon)`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    cursor: pointer;
`

const TimePickerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 260px;
    margin: 10px 0;

    margin-top: 21px;
    margin-bottom: 24px;
`

const TimePicker = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    position: relative;
`

const TimeValue = styled.div`
    width: 76px;
    height: 48px;
    flex-shrink: 0;

    margin: 12px 0;

    border-radius: 10px;
    border: 1px solid #313131;
    justify-content: center;
    align-items: center;
    display: flex;

    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
`

const ArrowButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    & img {
        width: 24px;
        height: 24px;
    }
`

interface TimeSelectorModalProps {
    isOpen: boolean
    onClose: () => void
    initialTime: string
}

const TimeSelectorModal = ({ isOpen, onClose, initialTime }: TimeSelectorModalProps) => {
    const [selectedPeriod, setSelectedPeriod] = useState("AM")
    const [selectedHour, setSelectedHour] = useState(1)
    const [selectedMinute, setSelectedMinute] = useState(0)

    if (!isOpen) return null

    const handleSave = () => {
        const formattedTime = `${selectedPeriod} ${selectedHour.toString().padStart(2, "0")}:${selectedMinute
            .toString()
            .padStart(2, "0")}`
        console.log(`저장된 시간: ${formattedTime}`)
        onClose()
    }

    const incrementHour = () => {
        setSelectedHour((prev) => (prev % 12) + 1)
    }

    const decrementHour = () => {
        setSelectedHour((prev) => (prev === 1 ? 12 : prev - 1))
    }

    const incrementMinute = () => {
        setSelectedMinute((prev) => (prev + 1) % 60)
    }

    const decrementMinute = () => {
        setSelectedMinute((prev) => (prev === 0 ? 59 : prev - 1))
    }

    return (
        <Overlay>
            <ModalContent>
                <h3>알림 허용 시간 설정</h3>
                <CloseButton onClick={onClose} />
                <TimePickerContainer>
                    <TimePicker>
                        <ArrowButton onClick={() => setSelectedPeriod(selectedPeriod === "AM" ? "PM" : "AM")}>
                            <DropDown />
                        </ArrowButton>
                        <TimeValue>{selectedPeriod}</TimeValue>
                        <ArrowButton onClick={() => setSelectedPeriod(selectedPeriod === "AM" ? "PM" : "AM")}>
                            <DropDown style={{ transform: "rotate(180deg)" }} />
                        </ArrowButton>
                    </TimePicker>
                    <TimePicker>
                        <ArrowButton onClick={decrementHour}>
                            <DropDown />
                        </ArrowButton>
                        <TimeValue>{String(selectedHour).padStart(2, "0")}</TimeValue>
                        <ArrowButton onClick={incrementHour}>
                            <DropDown style={{ transform: "rotate(180deg)" }} />
                        </ArrowButton>
                    </TimePicker>
                    <TimePicker>
                        <ArrowButton onClick={decrementMinute}>
                            <DropDown />
                        </ArrowButton>
                        <TimeValue>{String(selectedMinute).padStart(2, "0")}</TimeValue>
                        <ArrowButton onClick={incrementMinute}>
                            <DropDown style={{ transform: "rotate(180deg)" }} />
                        </ArrowButton>
                    </TimePicker>
                </TimePickerContainer>
                <TimeSelectorSaveButton onClick={handleSave}>저장</TimeSelectorSaveButton>
            </ModalContent>
        </Overlay>
    )
}

export default TimeSelectorModal
