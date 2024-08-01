"use client"
import React, { useState } from "react"
import styled from "styled-components"
import ModalHeader from "../../modal/ui/modalHeader"
import TimeSelectorModal from "./timeSelectorModal"
import Toggle from "@/shared/ui/toggle/toggle"

const NotificationSettingSection = styled.section`
    margin-left: 20px;
    font-family: Pretendard;
    color: white;
`

const NotificationSettingH2 = styled.h2`
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 20px;
`

const NotificationSettingUl = styled.ul`
    list-style: none;
    margin: 20px 0;

    & li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 10px;
    }
`

const TimeButton = styled.button`
    width: 90px;
    height: 34px;
    border-radius: 4px;
    background: #222;
    color: #979797;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-size: 16px;
    font-family: Pretendard;
`

const ToggleSwitchTimeButton = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const StyledSpan = styled.span`
    color: #616fed;
`

const NotificationSettingSpan = styled.span`
    color: #fff;
`

const TextWrapper = styled.div`
    display: flex;
    gap: 5px;
`

interface NotificationSettingContentProps {
    onClose: () => void
}

export const NotificationSettingContent = ({ onClose }: NotificationSettingContentProps) => {
    const [postViewAlerts, setPostViewAlerts] = useState([false, false])
    const [writingAlertTime, setWritingAlertTime] = useState("--:--")
    const [otherAlerts, setOtherAlerts] = useState([false, false, false])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const togglePostViewAlert = (index: number) => {
        const newAlerts = [...postViewAlerts]
        newAlerts[index] = !newAlerts[index]
        setPostViewAlerts(newAlerts)
    }

    const toggleOtherAlert = (index: number) => {
        const newAlerts = [...otherAlerts]
        newAlerts[index] = !newAlerts[index]
        setOtherAlerts(newAlerts)
    }

    const handleTimeButtonClick = () => {
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    const handleSaveTime = (formattedTime: string) => {
        setWritingAlertTime(formattedTime)
        setIsModalOpen(false)
    }

    return (
        <NotificationSettingSection>
            <ModalHeader title="알림 설정" onClose={onClose} />
            <div>
                <NotificationSettingH2>글 조회 알림</NotificationSettingH2>
                <NotificationSettingUl>
                    <li>
                        <TextWrapper>
                            <StyledSpan>발행한</StyledSpan>
                            <NotificationSettingSpan>글 조회 알림</NotificationSettingSpan>
                        </TextWrapper>
                        <Toggle checked={postViewAlerts[0]} onChange={() => togglePostViewAlert(0)} />
                    </li>
                    <li>
                        <TextWrapper>
                            <StyledSpan>신고 완료</StyledSpan>
                            <NotificationSettingSpan>알림</NotificationSettingSpan>
                        </TextWrapper>
                        <Toggle checked={postViewAlerts[1]} onChange={() => togglePostViewAlert(1)} />
                    </li>
                </NotificationSettingUl>
            </div>
            <div>
                <NotificationSettingH2>글쓰기 알림</NotificationSettingH2>
                <NotificationSettingUl>
                    <li>
                        <NotificationSettingSpan>글쓰기 시간 알림 설정</NotificationSettingSpan>
                        <ToggleSwitchTimeButton>
                            <Toggle checked={otherAlerts[0]} onChange={() => toggleOtherAlert(0)} />
                            <TimeButton onClick={handleTimeButtonClick}>{writingAlertTime}</TimeButton>
                        </ToggleSwitchTimeButton>
                    </li>
                </NotificationSettingUl>
            </div>
            <TimeSelectorModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                initialTime={writingAlertTime}
                onSave={handleSaveTime}
            />
        </NotificationSettingSection>
    )
}
